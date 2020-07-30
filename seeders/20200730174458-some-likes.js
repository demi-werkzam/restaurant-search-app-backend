"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "likes",
      [
        {
          like_date: "20/08/2020",
          restaurantId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like_date: "20/08/2020",
          restaurantId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like_date: "20/08/2020",
          restaurantId: 4,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          like_date: "20/08/2020",
          restaurantId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("likes", null, {});
  },
};
