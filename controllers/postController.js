const models = require('../models')
const { post } = require('../routes/postRoutes')

const postController = {}

postController.findAll = async(req,res) =>{

    try {
        const allposts = await models.post.findAll({include:{
            model: models.user
        }})
        res.json({allposts})
        console.log(allposts);
    } catch (error) {
        console.log('can not find all city')
        res.status(400).json({error:error.message})
        
    }
}

postController.findOne = async(req,res) =>{
    
    try {
        const onePost = await models.post.findOne({
            where:{ userId:req.headers.authorization}
        })
        console.log(onePost);
        res.json({onePost})
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
    
   
}

postController.create = async(req,res) =>{
    try {
        const user = await models.user.findOne({
            where:{id: req.headers.authorization}
        })
        
        const newPost = await models.post.create({
            image: req.body.image,
            description: req.body.description
        })

        await user.addPost(newPost)
        res.json({newPost})
        console.log('new post created')
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
}



postController.update = async (req,res) =>{

    try {
        let oldPost = await models.post.findOne({
            where:{id:req.headers.authorization}
        })
        console.log(oldPost);
        
        let response = await oldPost.update(req.body)
        res.json({response})
    } catch (error) {
       console.log(error)
       res.status(400).json({error:error.message})
    }
}

postController.delete = async(req,res) =>{

    try {
        const user = await models.user.findOne({
            where:{ id:req.headers.authorization}
        })
        console.log(user)
        
        
        const deletePost = await models.post.destroy({
            where:{
                id:req.params.id
            }
        })
        
        console.log(deletePost)
        res.json({deletePost})
    } catch (error) {
        console.log('can not delete');    
        res.status(400).json({error:error.message})
    
    }
}


module.exports = postController