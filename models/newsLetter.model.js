
const { Schema, model } = require("mongoose");

const newsLetterSchema = new Schema(
  {
    email: { type: String },
  },
  { timestamps: true }
);
const NewsLetter = model("NewsLetter", newsLetterSchema);
module.exports = NewsLetter;
