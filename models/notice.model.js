const { Schema, model } = require("mongoose");

const noticeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String},
    pdf: { type: String, required: true }  // Store the path to the PDF file
  },
  { timestamps: true }
);

const Notice = model("Notice", noticeSchema);
module.exports = Notice;
