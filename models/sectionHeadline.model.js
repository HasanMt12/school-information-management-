const { Schema, model } = require("mongoose");

const sectionHeadlineSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    index: {
      type: String,
      enum: [
        "speech",
        "governingBody",
        "school",
        "community",
        "result",
        "gallery",
        "event"
      ],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Section-headline", sectionHeadlineSchema);
