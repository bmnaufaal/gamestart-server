"use strict";
const { Profile, User } = require("../models");

class ProfileController {
  static async findOne(req, res, next) {
    try {
      const profile = await Profile.findOne({
        where: {
          UserId: req.user.id,
        },
        include: [
          {
            model: User,
            attributes: ["role"],
          },
        ],
      });
      res.status(200).json(profile);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { name, profilePicture, about } = req.body;
      await Profile.update(
        {
          name,
          profilePicture,
          about,
        },
        {
          where: {
            UserId: req.user.id,
          },
        }
      );
      res.status(200).json({
        message: "Profile has been updated",
      });
    } catch (error) {
      next(error);
    }
  }

  static async upgradeRole(req, res, next) {
    try {
      await User.update(
        {
          role: "Member",
        },
        {
          where: {
            id: req.user.id,
          },
        }
      );
      res.status(200).json({
        message: "Profile has been upgraded to member",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProfileController;
