const data = require("../utils/constants");
const EventsModel = require("../model/events");

const seedEvents = async () => {
  try {
    await EventsModel.deleteMany({});
    await EventsModel.create(data.events);
    console.log("Events Database seeded successfully");
  } catch (error) {
    console.error("Error seeding events database:", error);
  }
};

module.exports = seedEvents;
