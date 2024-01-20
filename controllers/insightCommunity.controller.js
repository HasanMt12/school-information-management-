const { deleteInsightCommunityService, updateInsightCommunityService, readAllInsightCommunityService, createInsightCommunityService } = require("../services/insightCommunity.service");

  // create new gallery
  exports.createInsightCommunityController = async (req, res) => {
    try {
      const result = await createInsightCommunityService(req.body);
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
  exports.readAllInsightCommunityController = async (req, res) => {
    try {
      const result = await readAllInsightCommunityService();
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
  exports.updateInsightCommunityController = async (req, res) => {
    try {
      const result = await updateInsightCommunityService(req.body, req.params.id);
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
  
  exports.deleteInsightCommunityController = async (req, res) => {
    try {
      const result = await deleteInsightCommunityService(req.params.id);
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
  