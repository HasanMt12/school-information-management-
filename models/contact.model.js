
const { Schema, model } = require("mongoose");

const schoolContactSchema = new Schema(
  {
    email: { type: String },
    address: { type: String },
    number: { type: Number },
    
  },
  { timestamps: true }
);
const SchoolContact = model("SchoolContact", schoolContactSchema);
module.exports = SchoolContact;
