const { Schema, model } = require("mongoose");

const heroSchema = new Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Hero = model("Hero", heroSchema);
module.exports = Hero;
