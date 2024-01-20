const {
    createVideoService,
    deleteVideoService,
    readAllVideoService,
    updateVideoService,
  } = require("../services/video.service");
  
  // create new Video
  exports.createVideoController = async (req, res) => {
    try {
      const result = await createVideoService(req.body);
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
  
  // read all Video
  exports.readAllVideoController = async (req, res) => {
    try {
      const result = await readAllVideoService();
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
  
  // update Video
  exports.updateVideoController = async (req, res) => {
    try {
      const result = await updateVideoService(req.body, req.params.id);
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
  
  // delete Video
  
  exports.deleteVideoController = async (req, res) => {
    try {
      const result = await deleteVideoService(req.params.id);
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
  