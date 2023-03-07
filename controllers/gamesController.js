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
    //   games.map((element) => {
    //     const { artworks, cover, screenshots } = element;
    //     artworks.forEach((element) => {
    //       element.image_id = `https://images.igdb.com/igdb/image/upload/t_1080p/${element.image_id}.png`;
    //     });
    //     console.log(cover.image_id)
    //     screenshots.forEach((element) => {
    //       element.image_id = `https://images.igdb.com/igdb/image/upload/t_1080p/${element.image_id}.png`;
    //     });
    //     return element;
    //   });
      res.status(200).json(games);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GamesController;
