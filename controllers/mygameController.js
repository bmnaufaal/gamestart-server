"use sctrict";
const { MyGame, Wishlist } = require("../models");
const axios = require("axios");

class MyGameController {
  static async findAll(req, res, next) {
    try {
      const mygames = await MyGame.findAll({
        where: {
          UserId: req.user.id,
        },
      });
      if (mygames.length === 0) {
        res.status(200).json([]);
      } else {
        let gameIds = [];
        mygames.forEach((element) => {
          gameIds.push(element.gameId);
        });
        let body = `
          fields name, rating, rating_count, platforms.name, platforms.platform_logo.image_id, summary, cover.image_id, screenshots.image_id, artworks.image_id, genres.name, checksum, videos.video_id; 
          limit 10;
        `;
        gameIds.forEach((element, index) => {
          if (gameIds.length === 1) {
            body = body.concat(`where id=(${element});`);
          } else {
            if (index === 0) {
              body = body.concat(`where id=(${element},`);
            } else if (index === gameIds.length - 1) {
              body = body.concat(`${element});`);
            } else {
              body = body.concat(`${element},`);
            }
          }
        });
        const { data: games } = await axios({
          method: "POST",
          url: process.env.IGDB_BASEURL + "/v4/games",
          data: body,
          headers: {
            "Client-ID": process.env.IGDB_CLIENT_ID,
            Authorization: process.env.IGDB_TOKEN,
          },
        });

        res.status(200).json(games);
      }
    } catch (error) {
      next(error);
    }
  }

  static async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const mygames = await MyGame.findAll({
        where: {
          id: id,
        },
      });
      res.status(200).json(mygames);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const UserId = req.user.id;
      const { gameId } = req.body;

      let body = `
            fields name, rating, rating_count, platforms.name, platforms.platform_logo.image_id, summary, cover.image_id, screenshots.image_id, artworks.image_id, genres.name, checksum, videos.video_id; 
            limit 1;
        `;
      body = body.concat(`where id=${gameId};`);
      const { data: games } = await axios({
        method: "POST",
        url: "https://api.igdb.com/v4/games",
        data: body,
        headers: {
          "Client-ID": "97q08leojr8005vzwasxrlux74dmpu",
          Authorization: "Bearer 6lebmp97ualingh5psd4les477p27z",
        },
      });
      if (!games) throw { name: "NotFound" };

      const foundMyGame = await MyGame.findOne({
        where: {
          UserId: UserId,
          gameId: gameId,
        },
      });

      if (foundMyGame) throw { name: "AlreadyBought" };

      const foundWishList = await Wishlist.findOne({
        where: {
          UserId: UserId,
          gameId: gameId,
        },
      });

      if (foundWishList) {
        await Wishlist.destroy({
          where: {
            UserId: UserId,
            gameId: gameId,
          },
        });
      }

      await MyGame.create({
        UserId: UserId,
        gameId: gameId,
      });
      res.status(201).json({
        message: "Game successfully bought",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MyGameController;
