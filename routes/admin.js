const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/AdminControllers')

router.get('/', AdminController.list)

router.post('/detail-customer',AdminController.detail)

router.get('/space',AdminController.space)

module.exports = router
