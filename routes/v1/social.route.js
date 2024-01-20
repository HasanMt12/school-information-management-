const router = require("express").Router();
const {
  readAllSocialController,
  createSocialController,
  updateSocialController,
  deleteSocialController,
} = require("../../controllers/social.controller");
router
  .route("/social")
  .get(readAllSocialController)
  .post(createSocialController);

router
  .route("/social/:id")
  .put(updateSocialController)
  .delete(deleteSocialController);
module.exports = router;
