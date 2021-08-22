require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const { connect } = require("./src/db/db");
const app = express();
const userRouter = require("./src/routes/userRouter");
const profileRouter = require("./src/routes/profileRouter");
const projectRouter = require("./src/routes/projectRouter");
const errorMiddleware = require("./src/middlewars/error-middleware");
const authMiddleware = require('./src/middlewars/auth-middleware')
const { PORT } = process.env;

const storage = multer.memoryStorage();
app.use(multer({ storage }).single("file"));

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use("/api/v1", userRouter);
app.use("/profile", profileRouter);
app.use("/projects", projectRouter);

app.use(errorMiddleware);

const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT} `));
  } catch (e) {
    console.log(e);
  }
};

start();
