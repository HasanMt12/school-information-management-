const { hashPassword, isPassMatched } = require("../handlers/passHash.handler");
const User = require("../models/user.model");
const generateToken = require("../utils/tokenGenerator");
// create new gallery
exports.createUserService = async (data) => {
  const { name, email, password } = data;

  const passwordHash = await hashPassword(password);
  const result = await User.create({ name, email, password: passwordHash });
  return result;
};
// admin login
exports.adminLoginService = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid user");
  }
  const isMatched = await isPassMatched(password, user.password);
  if (!isMatched) {
    throw new Error("Wrong email and password");
  }
  return { user, token: generateToken(user._id) };
};

// admin update password
exports.adminUpdateOwnPasswordService = async (data, adminId) => {
  const { currentPassword, newPassword } = data;
  // find admin
  const admin = await User.findById(adminId);
  if (!admin) {
    throw new Error("admin not exist");
  }
  // checking if password is matched
  const isMatched = await isPassMatched(currentPassword, admin.password);
  if (!isMatched) {
    throw new Error("Invalid Password");
  }
  const newPass = await hashPassword(newPassword);
  admin.password = newPass;
  await admin.save();
};
