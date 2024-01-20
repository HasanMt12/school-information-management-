const { Schema, model } = require("mongoose");

const speechSchema = new Schema(
  {
    title: { type: String, required: true },
    dialogue: { type: String, required: true },
    dialogue2: { type: String },
    dialogue3: { type: String },
    image: { type: String, required: true },
  },
  { timestamps: true }
);
const Speech = model("Speech ", speechSchema);
module.exports = Speech;
