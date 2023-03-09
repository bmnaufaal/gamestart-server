const ProfileController = require("../controllers/profileController");
const authentication = require("../middlewares/authentication");
const { profileAuthorization } = require("../middlewares/authorization");

const profileRouter = require("express").Router();

profileRouter.get("/", authentication, ProfileController.findOne);
profileRouter.patch(
  "/update",
  authentication,
  profileAuthorization,
  ProfileController.update
);

profileRouter.patch(
  "/upgrade",
  authentication,
  profileAuthorization,
  ProfileController.upgradeRole
);

module.exports = profileRouter;
