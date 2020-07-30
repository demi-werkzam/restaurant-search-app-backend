"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      restaurant.belongsTo(models.user);
    }
  }
  restaurant.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING,

        allowNull: false,
      },
      instagram: {
        type: DataTypes.STRING,
      },

      latitude: {
        type: DataTypes.FLOAT,
        unique: true,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
        unique: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "restaurant",
    }
  );
  return restaurant;
};
