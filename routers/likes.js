const { Router } = require("express");
const Restaurant = require("../models").restaurant;
const Visit = require("../models").visit;
const Like = require("../models").like;
const User = require("../models").user;

const router = new Router();

router.post("/:userId/:restaurantId", async (req, res, next) => {
  const { userId, restaurantId } = req.params;
  const { token } = req.body;
  if (!restaurantId) {
    return res.status(400).send("no restaurant send in body");
  }
  const user = await User.findOne({
    where: { id: userId },
  });
  const restaurant = await Restaurant.findOne({
    where: { id: restaurantId },
  });
  try {
    const newLike = await Like.create({
      userId: user.id,
      restaurantId: restaurant.id,
    });
    console.log(123, newLike);
    res.status(201).json({ ...newLike.dataValues });
  } catch (error) {
    console.log(error);
    next(e);
  }
});

router.get("/:userId", async (req, res, next) => {
  const { userId } = req.params;
  if (!userId) {
    return response.status(400).send({ message: "userId is not passed" });
  }
  try {
    const likes = await Like.findAll({
      where: { userId },
    });
    if (!likes) {
      res.status(404).send("Page not found");
    } else {
      res.status(200).send(likes);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:userId/:restaurantId", async (req, res, next) => {
  const { userId, restaurantId } = req.params;
  try {
    await Like.destroy({ where: { userId, restaurantId } });
    res.status(201).send("Like deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
