const models = require('../models')

const commentController = {}

commentController.findAll = async(req,res) =>{

    try {
        const allComment = await models.comment.findAll()
        res.json({allComment})
        console.log(allComment);
    } catch (error) {
        console.log('can not find all city')
        res.status(400).json({error:error.message})
    }
}

commentController.findOne = async(req,res) =>{

    try {
        const oneComment = await models.get.findOne({
            where:{userId:req.headers.authorization}

        })
        res.json({oneComment})
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
}

commentController.create = async(req,res) =>{
    try {
       
        const user = await models.user.findOne({
            where:{id: req.headers.authorization}

        })
        
        const newPost = await models.post.create({
            description: req.body.description,
            userId: user.id
        })

        await user.addPost(newPost)
        res.json({newPost})
        console.log('new post created')
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
}

module.exports = commentController