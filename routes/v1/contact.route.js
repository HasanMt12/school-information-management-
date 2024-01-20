const { createContactController, readAllContactController, deleteContactController, updateContactController } = require("../../controllers/contact.controller");

const router = require("express").Router();


router
  .route("/school-contact")
  .get(readAllContactController)
  .post(createContactController);

router
  .route("/school-contact/:id")
  .put(updateContactController)
  .delete(deleteContactController);
module.exports = router;
