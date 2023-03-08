"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MyGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MyGame.belongsTo(models.User);
    }
  }
  MyGame.init(
    {
      UserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "User id is required",
          },
          notEmpty: {
            msg: "User id is required",
          },
        },
      },
      gameId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Game id is required",
          },
          notEmpty: {
            msg: "Game id is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "MyGame",
    }
  );
  return MyGame;
};
