const connectDB = require('./db/connect')
const express = require('express');
const router = require('./routes/Jdm') 

// port
const port = 5000 || process.env.PORT;
const server = express();

// routes
server.use(router)
server.use(express.json())

// connect to db first then spinning the server
const start = async () => {
    try {
        console.log('Starting server')
        // connect to monggoDB
        console.log('connecting to DB')
        await connectDB(process.env.MONGO_URI)
        console.log('connected to DB')
        
        // spin the server
        server.listen(port, console.log('server listening on port:'+port))
    } catch (err) {
        console.error(err)        
    }
}

start();
