const GamesController = require("../controllers/gamesController");

const gamesRouter = require("express").Router();

gamesRouter.get("/", GamesController.findAll);
gamesRouter.post("/update", (req, res, next) => {});

module.exports = gamesRouter;
