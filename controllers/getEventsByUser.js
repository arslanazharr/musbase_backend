const Register = require("../model/register");
const EventsModel = require("../model/events");

const findRegisteredEventsByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const registeredUser = await Register.find({ userId }).exec();

    const eventIds = registeredUser.map((event) => event.eventId);

    const events = await EventsModel.find({ eventId: { $in: eventIds } });

    const eventDetail = events.map((event, index) => {
      const user = registeredUser[index];
      return {
        eventDetail: {
          eventName: event.eventName,
          date: event.date,
          description: event.description,
          location: event.location,
        },
        userDetail: {
          userName: user.name,
          userEmail: user.email,
          userPhone: user.phone,
        },
      };
    });

    res.status(200).json(eventDetail);
  } catch (err) {
    console.error("Error finding registered events:", err);
    throw err;
  }
};

module.exports = {
  findRegisteredEventsByUserId,
};
