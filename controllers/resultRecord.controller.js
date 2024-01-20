const { createresultRecordService, readAllresultRecordService, updateresultRecordService, deleteresultRecordService } = require("../services/resultRecord.service");

  
  // create new gallery
  exports.createresultRecordController = async (req, res) => {
    try {
      const result = await createresultRecordService(req.body);
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
  
  // read all gallery
  exports.readAllresultRecordController = async (req, res) => {
    try {
      const result = await readAllresultRecordService();
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
  
  // update gallery
  exports.updateresultRecordController = async (req, res) => {
    try {
      const result = await updateresultRecordService(req.body, req.params.id);
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
  
  exports.deleteresultRecordController = async (req, res) => {
    try {
      const result = await deleteresultRecordService(req.params.id);
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
  