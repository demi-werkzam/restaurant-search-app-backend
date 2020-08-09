const { Router } = require("express");
const Restaurant = require("../models").restaurant;
const Visit = require("../models").visit;
const Like = require("../models").like;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post("/:userId/:restaurantId", async (req, res, next) => {
  const { userId, restaurantId } = req.params;
  const { token } = req.body;
  console.log(123, token);
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
    const newVisit = await Visit.create({
      userId: userId,
      restaurantId: restaurantId,
    });
    console.log(123, newVisit);
    res.status(201).json({ ...newVisit.dataValues });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:userId", async (req, res, next) => {
  const { userId } = req.params;
  if (!userId) {
    return response.status(400).send({ message: "userId is not passed" });
  }
  try {
    const visits = await Visit.findAll({
      where: { userId },
      include: [{ model: Restaurant }],
    });
    if (!visits) {
      res.status(404).send("Page not found");
    } else {
      res.status(200).send(visits);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:userId/:restaurantId", async (req, res, next) => {
  const { userId, restaurantId } = req.params;
  try {
    await Visit.destroy({ where: { userId, restaurantId } });
    res.status(201).send("Visit deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
