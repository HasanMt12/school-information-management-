const { deleteFacilitiesService, updateFacilitiesService, readAllFacilitiesService, createFacilitiesService } = require("../services/facilities.service");
// create new gallery
exports.createFacilitiesController = async (req, res) => {
  try {
    const result = await createFacilitiesService(req.body);
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
exports.readAllFacilitiesController = async (req, res) => {
  try {
    const result = await readAllFacilitiesService();
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
exports.updateFacilitiesController = async (req, res) => {
  try {
    const result = await updateFacilitiesService(req.body, req.params.id);
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

exports.deleteFacilitiesController = async (req, res) => {
  try {
    const result = await deleteFacilitiesService(req.params.id);
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
