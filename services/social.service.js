const Social = require("../models/social.model");
// create new gallery
exports.createSocialService = async (data) => {
  const result = await Social.create(data);
  return result;
};

// read all gallery
exports.readAllSocialService = async () => {
  const result = await Social.find({});
  return result;
};

// update gallery
exports.updateSocialService = async (data, id) => {
  const result = await Social.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteSocialService = async (id) => {
  const data = await Social.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Social.findByIdAndDelete(id);
  return result;
};
