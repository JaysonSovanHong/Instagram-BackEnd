const postRoutes = require('express').Router()

const postController = require('../controllers/postController')


postRoutes.get('/posts', postController.findAll)
postRoutes.get('/post',postController.findOne)
postRoutes.post('/create',postController.create)
postRoutes.put('/post',postController.update)
postRoutes.delete('/delete/:id',postController.delete)


module.exports = postRoutes

