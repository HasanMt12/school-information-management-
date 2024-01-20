const {
  createTeacherService,
  deleteTeacherService,
  readAllTeacherService,
  updateTeacherService
} = require("../services/teacher.service");

// create new gallery
exports.createTeacherController = async (req, res) => {
  try {
    const result = await createTeacherService(req.body);
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
exports.readAllTeacherController = async (req, res) => {
  try {
    const result = await readAllTeacherService();
    res.status(200).json({
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
exports.deleteTeacherController = async (req, res) => {
  try {
    const result = await deleteTeacherService(req.params.id);
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


// update gallery
exports.updateTeacherController = async (req, res) => {
  try {
    const result = await updateTeacherService(req.params.id, req.body);
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};




