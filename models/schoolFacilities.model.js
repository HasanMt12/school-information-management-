const { Schema, model } = require("mongoose");

const facilitiesSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);
const Facilities = model("Facilities", facilitiesSchema);
module.exports = Facilities;
