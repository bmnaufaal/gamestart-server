const router = require("express").Router();
const userRouter = require("./user");
const profileRouter = require("./profile");
const gamesRouter = require("./games");

router.use("/", userRouter);
router.use("/profile", profileRouter);
router.use("/games", gamesRouter);

module.exports = router;
