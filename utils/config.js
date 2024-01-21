const cloudinaryConfig = {
    cloudinary: {
      cloud_name: proccess.env.name,
      api_key: proccess.env.key,
      api_secret: proccess.env.secret,
    },
    // Other configurations can be added here
  };
  
  module.exports = cloudinaryConfig;
  