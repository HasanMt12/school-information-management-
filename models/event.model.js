const { Schema, model } = require("mongoose");

// Eventes model
const eventsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    address: { type: String },
    eventDate: Date,
    image: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const Eventes = model("Eventes", eventsSchema);
module.exports = Eventes;
