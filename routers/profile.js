const ProfileController = require("../controllers/profileController");

const profileRouter = require("express").Router();

profileRouter.post("/", (req, res, next) => {});
profileRouter.post("/update", (req, res, next) => {});

module.exports = profileRouter;
