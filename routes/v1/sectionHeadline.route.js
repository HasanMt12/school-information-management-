const {
  getAllSectionHeadline,
  createSectionHeadline,
  updateSectionHeadline,
  deleteSectionHeadline,
} = require("../../controllers/sectionHeadline.controller");

const router = require("express").Router();

router
  .route("/section-header")
  .get(getAllSectionHeadline)
  .post(createSectionHeadline);
router
  .route("/section-header/:id")
  .put(updateSectionHeadline)
  .delete(deleteSectionHeadline);
module.exports = router;
