const router = require("express").Router();
const {
  updateSpeechController,
  deleteSpeechController,
  createSpeechController,
  readAllSpeechController,
} = require("../../controllers/speech.controller");
router
  .route("/speech")
  .get(readAllSpeechController)
  .post(createSpeechController);

router
  .route("/speech/:id")
  .put(updateSpeechController)
  .delete(deleteSpeechController);
module.exports = router;
