const express = require('express');
const router = express.Router()

// controller
const {
    greet
} = require('../controller/jdm')

//route
const defaultRoute = '/api/v1'

router.route(defaultRoute + '/greet').get(greet)


module.exports = router;