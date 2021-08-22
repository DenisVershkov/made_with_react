const express = require("express");
const profileRouter = express.Router();
const ProfileController = require("../controllers/profileController");

profileRouter.get("/:id", ProfileController.getProfile);
profileRouter.patch("/:id", ProfileController.editProfile);
profileRouter.post("/newPicture/:id", ProfileController.uploadProfileImg);

module.exports = profileRouter;
