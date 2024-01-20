const {
  createSocialService,
  deleteSocialService,
  readAllSocialService,
  updateSocialService,
} = require("../services/social.service");

// create new gallery
exports.createSocialController = async (req, res) => {
  try {
    const result = await createSocialService(req.body);
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
exports.readAllSocialController = async (req, res) => {
  try {
    const result = await readAllSocialService();
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
exports.updateSocialController = async (req, res) => {
  try {
    const result = await updateSocialService(req.body, req.params.id);
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

exports.deleteSocialController = async (req, res) => {
  try {
    const result = await deleteSocialService(req.params.id);
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
