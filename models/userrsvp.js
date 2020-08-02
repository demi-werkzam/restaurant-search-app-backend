"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userrsvp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userrsvp.belongsTo(models.user);
      userrsvp.belongsTo(models.rsvp);
    }
  }
  userrsvp.init(
    {
      userId: DataTypes.INTEGER,
      rsvpId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userrsvp",
    }
  );
  return userrsvp;
};
