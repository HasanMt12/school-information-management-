const router = require("express").Router();
const multer = require("multer");
const { readAllNoticeController, createNoticeController, updateNoticeController, deleteNoticeController } = require("../../controllers/notces.controller");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `pdf-${Date.now()}-${Math.random().toString(36).substring(2)}.pdf`);
  },
});

const upload = multer({ storage: storage });


router
  .route("/notices")
  .get(readAllNoticeController)
  .post(upload.single('pdf'), createNoticeController);

router
  .route("/notices/:id")
  .put(updateNoticeController)
  .delete(deleteNoticeController);

module.exports = router;



