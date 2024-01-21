const Navbar = require("../models/navabrMain.model");
// create new gallery
exports.createNavbarService = async (data) => {
  try {
    const existingNavber = await Navbar.find();

    if (existingNavber.length === 0) {
      const result = await Navbar.create(data);
      return result;
    }

    // Data already exists, handle accordingly (e.g., return an error or perform update logic)
    return existingNavber;
  } catch (error) {
    console.error("Error in creategNavberservice:", error);
    throw error; // Rethrow the error for better debugging
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
