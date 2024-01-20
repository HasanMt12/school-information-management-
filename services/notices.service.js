const Notice = require("../models/notice.model");
// create new gallery
exports.createNoticeService = async (data) => {
  const result = await Notice.create(data);
  return result;
};

// read all gallery
exports.readAllNoticeService = async () => {
  const result = await Notice.find({});
  return result;
};

// update gallery
exports.updateNoticeService = async (data, id) => {
  const result = await Notice.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteNoticeService = async (id) => {
  const data = await Notice.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Notice.findByIdAndDelete(id);
  return result;
};
