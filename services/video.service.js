const Video = require("../models/video.model");
// create new Video
exports.createVideoService = async (data) => {
  const result = await Video.create(data);
  return result;
};

// read all Video
exports.readAllVideoService = async () => {
  const result = await Video.find({});
  return result;
};

// update Video
exports.updateVideoService = async (data, id) => {
  const img = await Video.findById(id);
  if (!img) {
    throw new Error("Data not found");
  }
  const result = await Video.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete Video

exports.deleteVideoService = async (id) => {
  const data = await Video.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Video.findByIdAndDelete(id);
  return result;
};
