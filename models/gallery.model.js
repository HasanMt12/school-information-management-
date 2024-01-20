const { Schema, model } = require("mongoose");

const gallerySchema = new Schema(
  {
    image: {
      type: String,
      require: true,
    }
  },
  { timestamps: true }
);

const Gallery = model("Gallery", gallerySchema);
module.exports = Gallery;
