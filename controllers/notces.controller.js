
const { createNoticeService, readAllNoticeService, updateNoticeService, deleteNoticeService } = require("../services/notices.service");
// create new gallery

// read all gallery
exports.readAllNoticeController = async (req, res) => {
  try {
    const result = await readAllNoticeService();
    res.status(201).json({
      status: "success",
      total: result.length,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// exports.createNoticeController = async (req, res) => {
//     try {
//         const { title, description } = req.body;
//         const pdfData = req.file.buffer;
//         const pdfBase64 = pdfData.toString("base64");
    
//         const result = await createNoticeService({ title, description, pdf: { data: pdfBase64 } });
//       res.status(201).json({
//         status: "success",
       
//         data: { ...result, pdf: { data: pdfBase64 } },
//       });
//     } catch (error) {
//       res.status(400).json({
//         status: "fail",
//         message: error.message,
//       });
//     }
//   };

// exports.createNoticeController = async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const pdfData = req.file.buffer;
//     const pdfBase64 = pdfData.toString("base64");

//     const result = await createNoticeService({
//       title,
//       description,
//       pdf: { data: pdfBase64 }, // Make sure pdf is an object with a data property
//     });

//     res.status(201).json({
//       status: "success",
//       data: { ...result, pdf: { data: pdfBase64 } },
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: error.message,
//     });
//   }
// };

exports.createNoticeController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const pdfPath = req.file.path; // Access the file path

    const result = await createNoticeService({
      title,
      description,
      pdf: pdfPath,
    });

    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// update gallery
exports.updateNoticeController = async (req, res) => {
  try {
    const result = await updateNoticeService(req.body, req.params.id);
    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// delete gallery

exports.deleteNoticeController = async (req, res) => {
  try {
    const result = await deleteNoticeService(req.params.id);
    res.status(201).json({
      status: "success",
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
