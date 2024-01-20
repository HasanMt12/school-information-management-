const {
  createUserService,
  adminLoginService,
  getUserProfile,
  adminUpdateOwnPasswordService,
} = require("../services/user.service");

// create new gallery
exports.createUserController = async (req, res) => {
  try {
    const result = await createUserService(req.body);
    res.status(201).json({
      status: "success",
      message: "account created",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// admin login
exports.adminLoginController = async (req, res) => {
  try {
    const result = await adminLoginService(req.body);
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
// user update own password
exports.adminUpdateOwnPasswordController = async (req, res) => {
  try {
    const result = await adminUpdateOwnPasswordService(req.body, req.params.id);
    res.status(201).json({
      status: "success",
      message: "password updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
