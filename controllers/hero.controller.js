const {
  createHeroService,
  deleteHeroService,
  readAllHeroService,
  updateHeroService,
} = require("../services/hero.service");

// create new gallery
exports.createHeroController = async (req, res) => {
  try {
    const result = await createHeroService(req.body);
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
exports.readAllHeroController = async (req, res) => {
  try {
    const result = await readAllHeroService();
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
exports.updateHeroController = async (req, res) => {
  try {
    const result = await updateHeroService(req.body, req.params.id);
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

exports.deleteHeroController = async (req, res) => {
  try {
    const result = await deleteHeroService(req.params.id);
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
