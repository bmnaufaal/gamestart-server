"use strict";
const axios = require("axios");

class GamesController {
  static async findAll(req, res, next) {
    try {
      let { search, page, size } = req.query;
      let body = `
            fields name, rating, rating_count, platforms.name, platforms.platform_logo.image_id, summary, cover.image_id, screenshots.image_id, artworks.image_id, genres.name, checksum, videos.video_id; 
            limit 10;
        `;

      if (search) {
        body = body.concat(`search "${search}";`);
      }

      if (page && size) {
        body = body.replace(`limit 10;`, ``);
        page = size * page - size;
        body = body.concat(`limit ${size}; offset ${page};`);
      }

      const { data: games } = await axios({
        method: "POST",
        url: "https://api.igdb.com/v4/games",
        data: body,
        headers: {
          "Client-ID": "97q08leojr8005vzwasxrlux74dmpu",
          Authorization: "Bearer 6lebmp97ualingh5psd4les477p27z",
        },
      });
      res.status(200).json(games);
    } catch (error) {
      next(error);
    }
  }

  static async findOne(req, res, next) {
    try {
      let { id } = req.params;
      let body = `
            fields name, rating, rating_count, platforms.name, platforms.platform_logo.image_id, summary, cover.image_id, screenshots.image_id, artworks.image_id, genres.name, checksum, videos.video_id; 
            limit 1;
        `;

      if (!id) throw { name: "NotFound" };
      body = body.concat(`where id=${id};`);
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

      res.status(200).json(games);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GamesController;
