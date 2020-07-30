const { Router } = require("express");
const Restaurant = require("../models").restaurant;
const Visit = require("../models").visit;
const Like = require("../models").like;
const User = require("../models").user;

const router = new Router();

router.post("/:userId/:restaurantId", async (req, res, next) => {
  const { like_date } = req.body;
  const { userId, restaurantId } = request.params;
  if (req.user.id !== userId) {
    return res.status(300).send("unautherized user");
  }
  if (!restaurantId) {
    return res.status(300).send("no restaurant send in body");
  }
  const user = await User.findOne({
    where: { userId },
  });
  const restaurant = await Restaurant.findone({
    where: { restaurantId },
  });
  try {
    const newLike = Like.create({
      like_date,
      userId: user,
      restaurantId: restaurant,
    });
    res.status(201).json({ ...newLike.dataValues });
  } catch (error) {
    console.log(error);
    next(e);
  }
});

router.get("/:userId"),
  async (req, res, next) => {
    const { userId } = request.params;
    if (req.user.id !== userId) {
      return res.status(300).send("unautherized user");
    }
    try {
      const likes = await Like.findAll({
        where: { User },
        where: { Restaurant },
      });
      if (!likes) {
        res.status(404).send("Page not found");
      } else {
        res.status(200).send(likes);
      }
    } catch (error) {
      console.log(error);
      next(e);
    }
  };

module.exports = router;
