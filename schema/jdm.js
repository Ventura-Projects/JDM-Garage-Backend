// make schema for monggoDB with mongoose | adjust schema to qualify the requirement criteria with project

const mongoose = require('mongoose');

const JDMSchema = new mongoose.Schema({
    Type: {
        type: String,
        require: [true, 'Must Provide Type car!'],
        trim: true,
        maxlength:[20, 'Only 20 characters are allowed']
    },
    Manufacturer: {
        type: String,
        require: [true, 'Must Provide Manufacturer of that car!'],
        trim: true
    },
    Year: {
        type: Number,
        require: [true, 'Must Provide Year of that car!'],
        trim: true,
        maxlength:[4, 'Only 4 digit years are allowed']
    },
    Image: {
        type: String,
        require: [true, 'Must Provide Image of that car!'],
        trim:true
    },
    EnginePosition: {
        type: String,
        require: [true, 'Must Provide Engine Position of that car!'],
        trim:true
    },
    Transmission: {
        type: String,
        require: [true, 'Must Provide Transmission of that car!'],
        trim:true
    },
    WheelDrive: {
        type: String,
        require: [true, 'Must Provide Wheel Drive of that car!'],
        trim:true,
    },
    BodyStyle: {
        type: String,
        require: [true, 'Must Provide Body Style of that car!'],
        trim:true
    },
    Acceleration0to62mph: {
        type: Number,
        require: [true, 'Must Provide Acceleration 0 - 62mph of that car!'],
    },
    TopSpeedMPH: {
        type: Number,
        require: [true, 'Must Provide Top Speed MPH of that car!'],
    },
   

},{ timestamps: true})
module.exports= mongoose.model('JDMCar', JDMSchema);
