const {
    createNavbarService,
    deleteNavbarService,
    readAllNavbarService,
    updateNavbarService,
  } = require("../services/navbar.service");
  
  // create new gallery
  exports.createNavbarController = async (req, res) => {
    try {
      const result = await createNavbarService(req.body);
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
  exports.readAllNavbarController = async (req, res) => {
    try {
      const result = await readAllNavbarService();
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
  exports.updateNavbarController = async (req, res) => {
    try {
      const result = await updateNavbarService(req.body, req.params.id);
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
  
  exports.deleteNavbarController = async (req, res) => {
    try {
      const result = await deleteNavbarService(req.params.id);
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
  