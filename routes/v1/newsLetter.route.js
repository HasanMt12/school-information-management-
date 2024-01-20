const { readAllNewsLetterController, createNewsLetterController, deleteNewsLetterController } = require("../../controllers/newsLetter.controller");

const router = require("express").Router();

router
  .route("/newsLetter")
  .get(readAllNewsLetterController)
  .post(createNewsLetterController);

router
  .route("/newsLetter/:id")
  .delete(deleteNewsLetterController);
module.exports = router;
