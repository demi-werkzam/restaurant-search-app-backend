const { Router } = require("express");
const Restaurant = require("../models").restaurant;
const Visit = require("../models").visit;
const Like = require("../models").like;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    if (!restaurant) {
      res.status(404).send("Page not found");
    } else {
      res.status(200).send(restaurant);
    }
  } catch (error) {
    console.log(error);
    next(e);
  }
});

router.post(":userId", async (req, res) => {
  const userId = req.params;
  if (req.user.id === !userId) {
    return res.status(401).send("unautherized user");
  }
  const { name, address, webiste, instagram, latitude, longitude } = req.body;
  if ((!name, !address, !webiste, !instagram, !latitude, !longitude)) {
    return res
      .status(400)
      .send(
        "Please provide a name, address, webiste, instagram, latitude and longitude"
      );
  }
  try {
    const newRestaurant = Restaurant.create({
      name,
      address,
      webiste,
      instagram,
      latitude,
      longitude,
    });

    res.status(201).json({ ...newRestaurant.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).send({ message: "The restaurat already excists" });
    }
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
