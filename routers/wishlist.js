const WishlistController = require("../controllers/wishlistController");
const authentication = require("../middlewares/authentication");
const { wishlistAuthorization } = require("../middlewares/authorization");

const wishlistRouter = require("express").Router();

wishlistRouter.get("/", authentication, WishlistController.findAll);
wishlistRouter.get("/:id", authentication, WishlistController.findOne);
wishlistRouter.post("/add", authentication, WishlistController.create);
wishlistRouter.delete(
  "/:id",
  authentication,
  wishlistAuthorization,
  WishlistController.delete
);

module.exports = wishlistRouter;
