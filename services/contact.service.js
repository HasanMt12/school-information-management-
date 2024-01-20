const Contact = require("../models/contact.model");
// create new gallery
exports.createContactService = async (data) => {
  try {
    const existingContacts = await Contact.find();

    if (existingContacts.length === 0) {
      const result = await Contact.create(data);
      return result;
    }

    // Data already exists, handle accordingly (e.g., return an error or perform update logic)
    return existingContacts;
  } catch (error) {
    console.error("Error in createContactService:", error);
    throw error; // Rethrow the error for better debugging
  }
};

// read all gallery
exports.readAllContactService = async () => {
  const result = await Contact.find({});
  return result;
};

// update gallery
exports.updateContactService = async (data, id) => {
  const result = await Contact.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete gallery

exports.deleteContactService = async (id) => {
  const data = await Contact.findById(id);
  if (!data) {
    throw new Error("Data not found");
  }
  const result = await Contact.findByIdAndDelete(id);
  return result;
};
