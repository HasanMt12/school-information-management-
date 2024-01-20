const { Schema, model } = require("mongoose");

const navbarMainSchema = new Schema(
  {
    schoolName: { type: String, required: true },
    eiin: { type: Number },
    navbar: { type: Boolean, enum: ["true", "false"], default: "true" },
    image: { type: String, required: true },
  },
  { timestamps: true }
);
const Navbar = model("Navbar", navbarMainSchema);
module.exports = Navbar;
