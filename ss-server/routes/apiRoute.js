const express = require('express')
const router = express.Router()

const apiController = require('../controllers/apiController')

router.get('/', apiController.api_test_get)

module.exports = router