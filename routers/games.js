const GamesController = require("../controllers/gamesController");

const gamesRouter = require("express").Router();

gamesRouter.get("/", GamesController.findAll);
gamesRouter.get("/:id", GamesController.findOne);

module.exports = gamesRouter;
