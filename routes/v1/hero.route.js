const router = require("express").Router();
const {
  updateHeroController,
  readAllHeroController,
  createHeroController,
  deleteHeroController,
} = require("../../controllers/hero.controller");


router
  .route("/hero")
  .get(readAllHeroController)
  .post(createHeroController);

router
  .route("/hero/:id")
  .put(updateHeroController)
  .delete(deleteHeroController);
module.exports = router;
