const router = require("express").Router();
const { readAllInsightCommunityController, createInsightCommunityController, updateInsightCommunityController, deleteInsightCommunityController } = require("../../controllers/insightCommunity.controller");

router
  .route("/insight")
  .get(readAllInsightCommunityController)
  .post(createInsightCommunityController);

router
  .route("/insight/:id")
  .put(updateInsightCommunityController)
  .delete(deleteInsightCommunityController);
module.exports = router;
