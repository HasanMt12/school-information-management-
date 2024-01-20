const Gallery = require("../models/gallery.model");
// create new gallery
exports.createGalleryService = async (data) => {
  const result = await Gallery.create(data);
  return result;
};

// read all gallery
exports.readAllGalleryService = async () => {
  const result = await Gallery.find({});
  return result;
};

// update gallery
exports.updateGalleryService = async (data, id) => {
  const img = await Gallery.findById(id);
  if (!img) {
    throw new Error("Data not found");
  }
  const result = await Gallery.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteGalleryService = async (id) => {
  const data = await Gallery.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Gallery.findByIdAndDelete(id);
  return result;
};
