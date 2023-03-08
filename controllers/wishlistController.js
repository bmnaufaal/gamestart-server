"use strict";
const { Wishlist } = require("../models");
const axios = require("axios");

class WishlistController {
  static async findAll(req, res, next) {
    try {
      const wishlists = await Wishlist.findAll({
        where: {
          UserId: req.user.id,
        },
      });
      res.status(200).json(wishlists);
    } catch (error) {
      next(error);
    }
  }

  static async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const wishlist = await Wishlist.findAll({
        where: {
          id: id,
        },
      });
      res.status(200).json(wishlist);
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

      const foundWishlist = await Wishlist.findOne({
        where: {
          UserId: UserId,
          gameId: gameId,
        },
      });

      if (foundWishlist) throw { name: "AlreadyOnWishlist" };

      await Wishlist.create({
        UserId: UserId,
        gameId: gameId,
      });
      res.status(201).json({
        message: "Game added to wishlist",
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      await Wishlist.destroy({
        where: {
          id: id,
        },
      });
      res.status(201).json({
        message: "Game removed from wishlist",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = WishlistController;
