const express = require('express')
const hotesController = require('./../controllers/hotelsController')

const router = express.Router()

router.route('/:searchQuery').get(hotesController.searchHotel)

module.exports = router