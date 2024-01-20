const router = require("express").Router();
const {
  createUserController,
  adminLoginController,
  adminUpdateOwnPasswordController,
} = require("../../controllers/user.controller");
// middleware
const isLoggedIn = require("../../middleware/isLoggedIn");

router.route("/admin/register").post(createUserController);
router.route("/admin/login").post(adminLoginController);
router
  .route("/admin/update-password/:id")
  .patch(isLoggedIn, adminUpdateOwnPasswordController);
module.exports = router;
