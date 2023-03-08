const GamesController = require("../controllers/gamesController");

const gamesRouter = require("express").Router();

gamesRouter.get("/", GamesController.findAll);
gamesRouter.get("/:id", GamesController.findOne);
gamesRouter.post("/update", (req, res, next) => {});

module.exports = gamesRouter;
