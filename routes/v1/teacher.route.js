const router = require("express").Router();
// controllers
const {
  createTeacherController,
  readAllTeacherController,
  updateTeacherController,
  deleteTeacherController,
} = require("../../controllers/teacher.controller");


router
  .route("/teacher")
  .post( createTeacherController)
  .get(readAllTeacherController);
router
  .route("/teacher/:id")
  .delete( deleteTeacherController)
  router
  .route("/teacherUpdate/:id")
  .put( updateTeacherController);

module.exports = router;
