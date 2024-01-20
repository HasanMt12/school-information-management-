const {
    readAllVideoController,
    createVideoController,
    updateVideoController,
    deleteVideoController,
  } = require("../../controllers/video.controller");
  
  
  const router = require("express").Router();
  
  router
    .route("/video")
    .get(readAllVideoController)
    .post(createVideoController);
  
  router
    .route("/video/:id")
    .put(updateVideoController)
    .delete(deleteVideoController);
  
  module.exports = router;
  