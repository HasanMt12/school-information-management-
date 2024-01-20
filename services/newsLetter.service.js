const NewsLetter = require("../models/newsLetter.model");
// create new gallery
exports.createNewsLetterService = async (data) => {
  const result = await NewsLetter.create(data);
  return result;
};

// read all gallery
exports.readAllNewsLetterService = async () => {
  const result = await NewsLetter.find({});
  return result;
};

// delete gallery

exports.deleteNewsLetterService = async (id) => {
  const data = await NewsLetter.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await NewsLetter.findByIdAndDelete(id);
  return result;
};
