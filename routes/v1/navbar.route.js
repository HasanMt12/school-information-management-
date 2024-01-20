const router = require("express").Router();
const {
  readAllNavbarController,
  createNavbarController,
  updateNavbarController,
  deleteNavbarController,
} = require("../../controllers/navbar.controller");
router
  .route("/navbar")
  .get(readAllNavbarController)
  .post(createNavbarController);

router
  .route("/navbar/:id")
  .put(updateNavbarController)
  .delete(deleteNavbarController);
module.exports = router;
