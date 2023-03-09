const MyGameController = require("../controllers/mygameController");
const authentication = require("../middlewares/authentication");

const mygameRouter = require("express").Router();

mygameRouter.get("/", authentication, MyGameController.findAll);
mygameRouter.get("/:id", authentication, MyGameController.findOne);
mygameRouter.post("/add", authentication, MyGameController.create);

module.exports = mygameRouter;
