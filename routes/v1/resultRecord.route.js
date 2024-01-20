const router = require("express").Router();
const { readAllresultRecordController, createresultRecordController, updateresultRecordController, deleteresultRecordController } = require("../../controllers/resultRecord.controller");

router
  .route("/resultRecord")
  .get(readAllresultRecordController)
  .post(createresultRecordController);

router
  .route("/resultRecord/:id")
  .put(updateresultRecordController)
  .delete(deleteresultRecordController);
module.exports = router;
