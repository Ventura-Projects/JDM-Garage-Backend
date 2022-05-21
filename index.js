// const connectDB = require('./db/connect')
const express = require('express');
const router = require('./routes/Jdm') 
    
    
require('dotenv').config()

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
        // await connectDB


        server.listen(port, console.log('server listening on port:'+port))
        console.log('connected')
    } catch (err) {
        console.error(err)        
    }
}

start();
