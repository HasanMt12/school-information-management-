const Insight = require("../models/insightCommunity.model");
// create new gallery
exports.createInsightCommunityService = async (data) => {
  const result = await Insight.create(data);
  return result;
};

// read all gallery
exports.readAllInsightCommunityService = async () => {
  const result = await Insight.find({});
  return result;
};

// update gallery
exports.updateInsightCommunityService = async (data, id) => {
  const result = await Insight.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteInsightCommunityService = async (id) => {
  const data = await Insight.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Insight.findByIdAndDelete(id);
  return result;
};
