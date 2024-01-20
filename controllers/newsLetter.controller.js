const { createNewsLetterService, readAllNewsLetterService, updateNewsLetterService, deleteNewsLetterService } = require("../services/newsLetter.service");

// create new gallery
exports.createNewsLetterController = async (req, res) => {
  try {
    const result = await createNewsLetterService(req.body);
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
exports.readAllNewsLetterController = async (req, res) => {
  try {
    const result = await readAllNewsLetterService();
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



// delete gallery

exports.deleteNewsLetterController = async (req, res) => {
  try {
    const result = await deleteNewsLetterService(req.params.id);
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
