const Hero = require("../models/hero.model");
// create new gallery
exports.createHeroService = async (data) => {
  const result = await Hero.create(data);
  return result;
};

// read all gallery
exports.readAllHeroService = async () => {
  const result = await Hero.find({});
  return result;
};

// update gallery
exports.updateHeroService = async (data, id) => {
  const exist = await Hero.findById(id);
  if (!exist) {
    throw new Error("Data not found");
  }
  const result = await Hero.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteHeroService = async (id) => {
  const data = await Hero.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Hero.findByIdAndDelete(id);
  return result;
};
