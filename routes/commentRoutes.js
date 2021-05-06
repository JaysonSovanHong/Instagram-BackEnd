const commentRoutes = require('express').Router()

const commentController = require('../controllers/commentController')

commentRoutes.get('/comments', commentController.findAll)
commentRoutes.get('/comment', commentController.findOne)
commentRoutes.post('/comment/post', commentController.create)



module.exports = commentRoutes

