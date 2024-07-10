const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const RegisterModal = mongoose.model("RegisterdEvents", RegisterSchema);

module.exports = RegisterModal;
