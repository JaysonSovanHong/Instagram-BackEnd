const commentRoutes = require('express').Router()

const commentController = require('../controllers/commentController')

commentRoutes.get('/comments', commentController.findAll)
commentRoutes.get('/comment', commentController.findOne)
commentRoutes.post('/comment/create', commentController.create)
commentRoutes.post('/comment/post', commentController.findCommentforPost)


module.exports = commentRoutes

