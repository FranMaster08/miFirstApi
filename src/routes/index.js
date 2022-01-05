const express = require('express')
const routes = express.Router()
const controller = require('../controller')

routes.get('/',controller.homeController.getAllUsers)
routes.post('/',controller.homeController.createUser)

module.exports = routes