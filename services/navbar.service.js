const Navbar = require("../models/navabrMain.model");
// create new gallery
exports.createNavbarService = async (data) => {
  const exist = await Navbar.find();
  if (!exist) {
    const result = await Navbar.create(data);
    return result;
  }
};

// read all gallery
exports.readAllNavbarService = async () => {
  const result = await Navbar.find({});
  return result;
};

// update gallery
exports.updateNavbarService = async (data, id) => {
  const result = await Navbar.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteNavbarService = async (id) => {
  const data = await Navbar.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Navbar.findByIdAndDelete(id);
  return result;
};
