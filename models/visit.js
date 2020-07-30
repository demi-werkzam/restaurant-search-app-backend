"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      visit.belongsTo(models.user);
      visit.belongsTo(models.restaurant);
    }
  }
  visit.init(
    {
      visit_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "visit",
    }
  );
  return visit;
};
