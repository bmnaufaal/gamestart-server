const router = require("express").Router();
const userRouter = require("./user");
const profileRouter = require("./profile");

router.use("/", userRouter);
router.use("/profile", profileRouter);

module.exports = router;
