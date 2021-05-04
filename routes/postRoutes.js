const postRoutes = require('express').Router()
const { newImage } = require('../functions/upload');

const postController = require('../controllers/postController')


postRoutes.get('/posts', postController.findAll)
postRoutes.get('/post',postController.findOne)
postRoutes.post('/create',newImage.single('image'),postController.create)
postRoutes.put('/post',postController.update)
postRoutes.delete('/delete/:id',postController.delete)


module.exports = postRoutes

