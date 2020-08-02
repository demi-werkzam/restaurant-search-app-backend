const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
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

router.get("/:userId", async (req, res, next) => {
  const { userId } = req.params;
  if (!userId) {
    return response
      .status(400)
      .send({ message: "userId is not passed in the body" });
  }
  try {
    const restaurant = await Restaurant.findAll({
      where: { userId: userId },
    });
    if (!restaurant) {
      res.status(404).send("Page not found");
    } else {
      res.status(200).send(restaurant);
    }
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { name, address, website, instagram, latitude, longitude } = req.body;
  console.log("What is in the body?", req.body);
  if (
    !name ||
    !address ||
    !website ||
    !instagram ||
    !latitude ||
    !longitude ||
    !userId
  ) {
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
      website,
      instagram,
      latitude,
      longitude,
      userId,
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
