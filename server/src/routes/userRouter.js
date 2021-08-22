const express = require("express");
const userRouter = express.Router();
const UserController = require("../controllers/userController");
const { body } = require("express-validator");
const authMiddleware = require("../middlewars/auth-middleware");

userRouter.post(
  "/auth/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  UserController.signUp
);
userRouter.post("/auth/signin", UserController.signIn);
userRouter.post("/auth/signout", UserController.signOut);
userRouter.post("/auth/activate/:link", UserController.activate);
userRouter.get("/auth/refresh", UserController.refresh);
userRouter.post("/auth/resetPasswordLetter", UserController.sendResetPasswordLetter);
userRouter.post("/auth/newPassword/:link", UserController.updatePassword);

module.exports = userRouter;
