"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "restaurants",
      [
        {
          name: "Water en Brood",

          website: "https://www.waterenbrood.com",
          instagram: "https://www.instagram.com/waterenbrood.ams/",
          address: "straat, 19, Amsterdam",
          latitude: 52.36401,
          longitude: 4.9058,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pllek",

          website: "https://pllek.nl",
          instagram: "https://www.instagram.com/pllek_amsterdam/",
          address: "T.T. Neveritaweg 59, 1033 WB Amsterdam",
          latitude: 52.39921,
          longitude: 4.89285,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Lobby",

          website: "https://fizeaustraat.thelobby.nl/",
          instagram: "https://www.instagram.com/thelobbyamsterdam/",
          address: "Fizeaustraat 2, 1097SC Amsterdam",
          latitude: 52.345329,
          longitude: 4.92555,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "De Ysbreker",

          website: "https://www.deysbreeker.nl/",
          instagram: "https://www.instagram.com/deysbreeker/",
          address: "Weesperzijde 23, 1091EC Amsterdam",
          latitude: 52.35754,
          longitude: 4.90689,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Ted’s Place",

          website: "https://teds-place.nl/",
          instagram: "https://www.instagram.com/teds_place/",
          address: "Bosboom Toussaintstraat 60, 1054 AV Amsterdam",
          latitude: 52.36535,
          longitude: 4.87472,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Sotto",

          website: "https://sottopizza.nl/",
          instagram: "https://www.instagram.com/sotto_pizza/",
          address: "Amstelveenseweg 89, 1075 VW Amsterdam",
          latitude: 52.352909,
          longitude: 4.85632,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("restaurants", null, {});
  },
};
