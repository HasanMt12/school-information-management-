const { readAllEventesController, createEventesController, updateEventesController, deleteEventesController } = require("../../controllers/event.cotroller");

const router = require("express").Router();


router
  .route("/event")
  .get(readAllEventesController)
  .post(createEventesController);

router
  .route("/event/:id")
  .put(updateEventesController)
  .delete(deleteEventesController);
module.exports = router;
