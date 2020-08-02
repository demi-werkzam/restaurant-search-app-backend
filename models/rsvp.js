"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rsvp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rsvp.belongsTo(models.restaurant);
      rsvp.belongsToMany(models.user, {
        through: "userrsvp",
        forienkey: "rsvpId",
      });
    }
  }
  rsvp.init(
    {
      rsvp_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_at: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "rsvp",
    }
  );
  return rsvp;
};
