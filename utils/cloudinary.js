// config import from .env
const config = require('./config');

// Cloudinary SDK
const Cloudinary = require('cloudinary');

Cloudinary.config({ 
    cloud_name: config.CLOUD_NAME(), 
    api_key: config.CLOUDINARY_API_KEY(), 
    api_secret: config.CLOUDINARY_API_SECRET()
});

// cloudinary.uploader.upload(file, options, callback);
const upToCloudinaryCars = (file) => {
    // file = req.file.path | this is an Image
return await Cloudinary.uploader.upload(file, {
    folder: 'JDMGarageAsset/Cars',
    use_filename: true,
    unique_filename: true,
})
    //e.g { img : upToCloudinaryCars.public_id }
}

module.exports = {
    Cloudinary,
    upToCloudinaryCars
};