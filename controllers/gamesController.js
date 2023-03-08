"use strict";
const axios = require("axios");

class GamesController {
  static async findAll(req, res, next) {
    try {
      let { search, page, size } = req.query;
      let body = `
            fields name, rating, rating_count, platforms.name, platforms.platform_logo.image_id, summary, cover.image_id, screenshots.image_id, artworks.image_id, genres.name, checksum, videos.video_id; 
            where rating != n & rating > 90;
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
      console.log(body);
      const { data: games } = await axios({
        method: "POST",
        url: process.env.IGDB_BASEURL + "/v4/games",
        data: body,
        headers: {
          "Client-ID": process.env.IGDB_CLIENT_ID,
          Authorization: process.env.IGDB_TOKEN,
        },
      });
      //   games.forEach((element) => {
      //     element.price = 100000;
      //   });
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
        url: process.env.IGDB_BASEURL + "/v4/games",
        data: body,
        headers: {
          "Client-ID": process.env.IGDB_CLIENT_ID,
          Authorization: process.env.IGDB_TOKEN,
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
