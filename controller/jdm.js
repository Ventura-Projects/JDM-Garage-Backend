// export schema
const exampleDB = 'hello world'

const greet = async (req,res) => {
    try {
        const fromDb = await exampleDB
        res.status(200).send({fromDb})
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    greet
}