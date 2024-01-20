const { deleteContactService, updateContactService, readAllContactService, createContactService } = require("../services/contact.service");

exports.createContactController = async (req, res) => {
  try {
    const result = await createContactService(req.body);
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
  exports.readAllContactController = async (req, res) => {
    try {
      const result = await readAllContactService();
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
  exports.updateContactController = async (req, res) => {
    try {
      const result = await updateContactService(req.body, req.params.id);
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
  
  exports.deleteContactController = async (req, res) => {
    try {
      const result = await deleteContactService(req.params.id);
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
  