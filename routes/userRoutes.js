const userRoutes = require('express').Router()
const userController = require('../controllers/userController')

userRoutes.post('/signup',userController.create)
userRoutes.post('/login',userController.login)
userRoutes.get('/verify',userController.verify)

module.exports = userRoutes