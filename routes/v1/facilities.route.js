const router = require("express").Router();

const {
  updateFacilitiesController,
  deleteFacilitiesController,
  createFacilitiesController,
  readAllFacilitiesController,
} = require("../../controllers/facilities.controller");
router
  .route("/facilities")
  .get(readAllFacilitiesController)
  .post(createFacilitiesController);

router
  .route("/facilities/:id")
  .put(updateFacilitiesController)
  .delete(deleteFacilitiesController);
module.exports = router;
