const { Schema, model } = require("mongoose");

const videoSchema = new Schema(
  {

    youtube: {
      type: String,
    },
  },
  { timestamps: true }
);

const Video = model("Video", videoSchema);
module.exports = Video;
