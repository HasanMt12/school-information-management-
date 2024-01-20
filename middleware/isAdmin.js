const Admin = require("../models/user.model");

const isAdmin = async (req, res, next) => {
  const userId = req.userAuth.id;
  const admin = await Admin.findById(userId);
  if (admin.admin === true) {
    next();
  } else {
    res.status(403).json({
      success: failed,
      message: "Access Denied. You are not an admin!",
    });
  }
};
module.exports = isAdmin;
