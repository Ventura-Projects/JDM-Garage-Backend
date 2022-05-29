require('dotenv').config();
// will stop the server and tell what missing part of environment

const CLOUD_NAME = () => {
    const cloud_name = process.env.CLOUD_NAME
    return !!cloud_name ? cloud_name : new Error('Cloud name could not be found')
}
const CLOUDINARY_API_KEY = () => {
    const cloudinary_api_key = process.env.CLOUDINARY_API_KEY
    return !!cloudinary_api_key ? cloudinary_api_key : new Error('Cloudinary api key could not be found')
}
const CLOUDINARY_API_SECRET = () => {
    const cloudinary_api_secret = process.env.CLOUDINARY_API_SECRET
    return !!cloudinary_api_secret ? cloudinary_api_secret : new Error('Cloudinary api secret could not be found')
}

module.exports = {
    CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
};