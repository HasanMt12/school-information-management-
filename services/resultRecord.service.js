const Navbar = require("../models/resultRecord.model");
// create new gallery
exports.createresultRecordService = async (data) => {
  const result = await Navbar.create(data);
  return result;
};

// read all gallery
exports.readAllresultRecordService = async () => {
  const result = await Navbar.find({});
  return result;
};

// update gallery
exports.updateresultRecordService = async (data, id) => {
  const result = await Navbar.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteresultRecordService = async (id) => {
  const data = await Navbar.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Navbar.findByIdAndDelete(id);
  return result;
};
