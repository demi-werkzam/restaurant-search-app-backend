"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("visits", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("likes", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("visits", "restaurantId", {
      type: Sequelize.INTEGER,
      references: {
        model: "restaurants",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("likes", "restaurantId", {
      type: Sequelize.INTEGER,
      references: {
        model: "restaurants",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("restaurants", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("visits", "userId");
    await queryInterface.removeColumn("likes", "userId");
    await queryInterface.removeColumn("likes", "restaurantId");
    await queryInterface.removeColumn("visits", "restaurantId");
    await queryInterface.removeColumn("restaurants", "userId");
  },
};
