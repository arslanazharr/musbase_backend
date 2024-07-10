const express = require("express");
const { fetchAllEvents } = require("../controllers/getAllEvents");
const { registerEvent } = require("../controllers/registerEvent");
const {
  findRegisteredEventsByUserId,
} = require("../controllers/getEventsByUser");

const router = express.Router();

router.get("/events", fetchAllEvents);
router.post("/events/register", registerEvent);
router.get("/user/:userId/registered-events", findRegisteredEventsByUserId);
module.exports = router;
