// export schema
const JDMCar = require('../schema/Jdm')
const exampleDB = 'hello world'

// for capitalize first letter
// const a = "hello".capitalize();
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

const greet = async (req,res) => {
    try {
        // const fromDb = await exampleDB
        const JDMCars = await JDMCar.find();
        res.status(200).json({JDMCars})
    } catch (err) {
        res.status(500).json(err);
    }
}
// const create = async (req, res) => {
//     try {
//         const JDM = await JDMCar.create({
//             Type: 'AE86',
//             Manufacturer: 'Toyota',
//             Year: 1983,
//             Image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Sprinter_Trueno_1600_GT_%28AE86%29.jpg',
//             EnginePosition: 'Front',
//             Transmission: "Manual",
//             WheelDrive: 'RWD',
//             BodyStyle: '2-door',
//             Acceleration0to62mph: 8.3,
//             TopSpeedMPH:122
//         })
//         res.status.json({JDM})
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }

module.exports = {
    greet,
    // create
}