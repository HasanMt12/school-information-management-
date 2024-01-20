const { Schema, model } = require("mongoose");

const resultRecordSchema = new Schema(
  {
    studentCount: { type: Number, required: true },
    years: { type: Number, required: true },
  },
  { timestamps: true }
);
const ResultRecord = model("ResultRecord", resultRecordSchema);
module.exports = ResultRecord;
