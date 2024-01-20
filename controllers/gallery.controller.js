const {
  createGalleryService,
  deleteGalleryService,
  readAllGalleryService,
  updateGalleryService,
} = require("../services/gallery.service");

// create new gallery
exports.createGalleryController = async (req, res) => {
  try {
    const result = await createGalleryService(req.body);
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// read all gallery
exports.readAllGalleryController = async (req, res) => {
  try {
    const result = await readAllGalleryService();
    res.status(201).json({
      status: "success",
      total: result.length,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// update gallery
exports.updateGalleryController = async (req, res) => {
  try {
    const result = await updateGalleryService(req.body, req.params.id);
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// delete gallery

exports.deleteGalleryController = async (req, res) => {
  try {
    const result = await deleteGalleryService(req.params.id);
    res.status(201).json({
      status: "success",
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
