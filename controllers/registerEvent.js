const Register = require("../model/register");

const registerEvent = async (req, res) => {
  const { eventId, phone, email, name, userId } = req.body;

  try {
    const register = new Register({
      phone,
      email,
      name,
      eventId,
      userId,
    });

    const existingEvent = await Register.findOne({ eventId });

    if (existingEvent) {
      return res.status(400).json({ message: "Event already registered!" });
    }

    await register.save();

    res.status(200).json({ message: "Event Registered!" });
  } catch (error) {
    console.error("Error registering event:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  registerEvent,
};
