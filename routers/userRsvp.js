const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const router = new Router();
const Rsvps = require("../models").rsvp;
const UserRsvps = require("../models").userrequest;
const User = require("../models").user;

router.get("/:userId", authMiddleware, async (request, response, next) => {
  try {
    const { userId } = request.params;
    if (!userId) {
      return response.status(400).send({ message: "No userId passed in body" });
    }
    const requests = await UserRsvps.findAll({
      where: { userId },
      include: [Rsvps],
    });
    if (!requests) {
      response.status(404).send("request not found");
    } else {
      response.send(requests);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/:userId", async (request, response, next) => {
  try {
    const { userId } = request.params;
    const { requestId, friends } = request.body;
    if (!userId || !requestId) {
      response
        .status(400)
        .send("Must provide userId and tripId  to insert into userTrips");
    } else {
      const newRsvp = await UserRsvps.create({ userId, rsvpId });

      const userRsvpsCreatePromises = friends.map(async (friend) => {
        console.log(friend);
        await UserRsvps.create({ rsvpId, userId: friend.id });
      });

      await Promise.all(userRsvpsCreatePromises);

      const trip = await UserRsvps.findAll({
        where: { rsvpId },
        include: [User, Rsvps],
      });

      response.json(rsvp);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
