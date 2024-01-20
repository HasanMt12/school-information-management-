const Teacher = require("../models/principal.model");
// create new gallery
exports.createTeacherService = async (data) => {
  const result = await Teacher.create(data);
  return result;
};

// read all gallery
exports.readAllTeacherService = async () => {
  const result = await Teacher.find({});
  return result;
};

// update gallery
exports.updateTeacherService = async (id, requestBody) => {
  const data = await Teacher.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Teacher.findByIdAndUpdate(id, requestBody, { new: true });
  return result;
};

// delete gallery

exports.deleteTeacherService = async (id) => {
  const data = await Teacher.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Teacher.findByIdAndDelete(id);
  return result;
};
