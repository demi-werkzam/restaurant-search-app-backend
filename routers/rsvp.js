const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const router = new Router();
const Rsvp = require("../models").rsvp;
const UserRsvp = require("../models").userrequest;
const User = require("../models").user;

router.post("/", authMiddleware, async (request, response, next) => {
  try {
    const {
      body: { date, start_at },
    } = request;

    if (!date || !start_at) {
      response.status(400).send("Must provide date and start time for request");
    } else {
      const newRsvp = await Rsvp.create({
        date,
        start_at,
      });
      response.json(newRsvp);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:rsvpId", async (request, response, next) => {
  try {
    const { rsvpId } = request.params;
    if (!rsvpId) {
      return response.status(400).send({ message: "rsvpId is not passed" });
    }
    const rsvp = await UserRsvp.findAll({
      where: { rsvpId },
      include: [User, Rsvp],
    });
    if (!rsvp) {
      response.status(404).send("rsvp not found");
    } else {
      response.send(rsvp);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
