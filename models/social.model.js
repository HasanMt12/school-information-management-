const { Schema, model } = require("mongoose");

const socialSchema = new Schema(
  {
    url: { type: String, required: true },
    icon: {
      type: String,
      required: true,
      enum: ["facebook", "linkedin", "email", "youtube", "whatsapp"],
    },
  },
  { timestamps: true }
);
const Social = model("Social ", socialSchema);
module.exports = Social;
