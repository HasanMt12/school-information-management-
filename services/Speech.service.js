const Speech = require("../models/speech.model");
// create new gallery
exports.createSpeechService = async (data) => {
  const result = await Speech.create(data);
  return result;
};

// read all gallery
exports.readAllSpeechService = async () => {
  const result = await Speech.find({});
  return result;
};

// update gallery
exports.updateSpeechService = async (data, id) => {
  const result = await Speech.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteSpeechService = async (id) => {
  const data = await Speech.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Speech.findByIdAndDelete(id);
  return result;
};
