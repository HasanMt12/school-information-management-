const SectionHeadline = require("../models/sectionHeadline.model");
// create
exports.createSectionHeadline = async (req, res) => {
  try {
    const { title, index } = req.body;

    const result = await SectionHeadline.create({ title, index });
    res.status(201).json({
      message: "Successfully created new section headline",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
// get all
exports.getAllSectionHeadline = async (req, res) => {
  try {
    const result = await SectionHeadline.find();
    res.status(201).json({
      status: "success",
      data: result
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
// update
exports.updateSectionHeadline = async (req, res) => {
  try {
    const result = await SectionHeadline.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(201).json({
      status: "success",
      data: result
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
// delete
exports.deleteSectionHeadline = async (req, res) => {
  try {
    const result = await SectionHeadline.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
