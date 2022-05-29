// export schema
const exampleDB = 'hello world'
// export the cloudinary for uploading the Image
const{ upToCloudinaryCars } = require('../utils/cloudinary');
    
const greet = async (req,res) => {
    try {
        // retrieve data from databse
        const fromDb = await exampleDB
        
        res.status(200).send({fromDb})
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    greet
}