"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }
  }
  Profile.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Name should not be null",
          },
          notEmpty: {
            msg: "Name should not be empty",
          },
        },
      },
      profilePicture: DataTypes.STRING,
      UserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "User id should not be null",
          },
          notEmpty: {
            msg: "User id should not be empty",
          },
        },
      },
      about: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
