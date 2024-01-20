const { Schema, model } = require("mongoose");

const insightCommunitySchema = new Schema(
  {
    communityQuantity: { type: Number },
    communityName: { type: String, required: true },
    boys: { type: Number },
    girls: { type: Number },
  },
  { timestamps: true }
);
const Insight = model("Insight", insightCommunitySchema);
module.exports = Insight;
