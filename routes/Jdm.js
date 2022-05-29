const express = require('express');
const router = express.Router()

// controller
const {
    greet,
    // create
} = require('../controller/jdm')

//route
const defaultRoute = '/api/v1'

router.route(defaultRoute + '/greet').get(greet)
// router.route(defaultRoute + '/create').get(create)
router.route(defaultRoute + '/graphQL')


module.exports = router;