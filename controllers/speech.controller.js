const { createSpeechService, readAllSpeechService, updateSpeechService, deleteSpeechService } = require("../services/Speech.service");
// create new gallery
exports.createSpeechController = async (req, res) => {
  try {
    const result = await createSpeechService(req.body);
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
exports.readAllSpeechController = async (req, res) => {
  try {
    const result = await readAllSpeechService();
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
exports.updateSpeechController = async (req, res) => {
  try {
    const result = await updateSpeechService(req.body, req.params.id);
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

exports.deleteSpeechController = async (req, res) => {
  try {
    const result = await deleteSpeechService(req.params.id);
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
