const router = require("express").Router();
const userRouter = require("./user");
const profileRouter = require("./profile");
const gamesRouter = require("./games");
const wishlistRouter = require("./wishlist");
const mygameRouter = require("./mygame");

router.use("/", userRouter);
router.use("/profile", profileRouter);
router.use("/games", gamesRouter);
router.use("/wishlists", wishlistRouter);
router.use("/mygames", mygameRouter);

module.exports = router;
