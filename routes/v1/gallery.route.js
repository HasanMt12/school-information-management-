const {
  readAllGalleryController,
  createGalleryController,
  updateGalleryController,
  deleteGalleryController,
} = require("../../controllers/gallery.controller");


const router = require("express").Router();

router
  .route("/gallery")
  .get(readAllGalleryController)
  .post(createGalleryController);

router
  .route("/gallery/:id")
  .put(updateGalleryController)
  .delete(deleteGalleryController);

module.exports = router;
