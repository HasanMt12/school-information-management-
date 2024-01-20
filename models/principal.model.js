const { Schema, model } = require("mongoose");

// governingbody model
const principlesSchema = new Schema(
  {
    name: { type: String, required: true },
    email: String,
    designation: String,
    phone: String,
    joinDate: Date,
    image: {
      type: String,
      required: true,
    },
    education: {
      degree: String,
      university: String,
      yearCompleted: Number,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },
  },
  { timestamps: true }
);

const Principles = model("Principle", principlesSchema);
module.exports = Principles;
