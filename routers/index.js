const router = require("express").Router();
const userRouter = require("./user");
const profileRouter = require("./profile");
const gamesRouter = require("./games");
const wishlistRouter = require("./wishlist");

router.use("/", userRouter);
router.use("/profile", profileRouter);
router.use("/games", gamesRouter);
router.use("/wishlists", wishlistRouter);

module.exports = router;
