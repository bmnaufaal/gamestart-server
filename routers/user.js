const UserController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");

const userRouter = require("express").Router();

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);
userRouter.post("/google-sign-in", UserController.googleSignIn);
userRouter.post(
  "/generate-midtrans-token",
  authentication,
  UserController.generateMidtransToken
);

module.exports = userRouter;
