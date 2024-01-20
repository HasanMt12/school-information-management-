const { createEventesService, readAllEventesService, updateEventesService, deleteEventesService } = require("../services/event.service");

// create new gallery
exports.createEventesController = async (req, res) => {
  try {
    const result = await createEventesService(req.body);
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
exports.readAllEventesController = async (req, res) => {
  try {
    const result = await readAllEventesService();
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
exports.updateEventesController = async (req, res) => {
  try {
    const result = await updateEventesService(req.body, req.params.id);
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

exports.deleteEventesController = async (req, res) => {
  try {
    const result = await deleteEventesService(req.params.id);
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
