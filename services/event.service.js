const Eventes = require("../models/event.model");
// create new gallery
exports.createEventesService = async (data) => {
  const result = await Eventes.create(data);
  return result;
};

// read all gallery
exports.readAllEventesService = async () => {
  const result = await Eventes.find({});
  return result;
};

// update gallery
exports.updateEventesService = async (data, id) => {
  const result = await Eventes.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteEventesService = async (id) => {
  const data = await Eventes.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Eventes.findByIdAndDelete(id);
  return result;
};
