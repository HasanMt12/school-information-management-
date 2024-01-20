const Facilities = require("../models/schoolFacilities.model");
// create new gallery
exports.createFacilitiesService = async (data) => {
  const result = await Facilities.create(data);
  return result;
};

// read all gallery
exports.readAllFacilitiesService = async () => {
  const result = await Facilities.find({});
  return result;
};

// update gallery
exports.updateFacilitiesService = async (data, id) => {
  const result = await Facilities.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteFacilitiesService = async (id) => {
  const data = await Facilities.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Facilities.findByIdAndDelete(id);
  return result;
};
