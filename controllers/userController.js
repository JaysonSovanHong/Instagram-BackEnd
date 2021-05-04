const models = require('../models')

const userController = {}


userController.create = async (req,res) =>{
    try {
     
        const user = await models.user.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            image:req.body.image
        })
        res.json({user})
        console.log('profile created')
    }   catch (error) {
            console.log(error);
            res.status(400).json({error:error.message})
    
    }
}

userController.login = async (req,res)=>{
    try {
        const user = await models.user.findOne({
            where:{email:req.body.email}
        })

        if(user.password === req.body.password)
        res.json({user, message: 'login successful'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
}

userController.verify = async(req,res)=>{
    try {
        const user = await models.user.findOne({
            where:{id: req.headers.authorization},
            include:{model: models.post}
        })
        console.log(user);
        if(user){res.json({user,message:'user found'})}
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }

}

userController.findAll = async (req,res) =>{
    try {
        const user = await models.user.findAll()
        console.log(user);
        res.json({user})
    } catch (error) {
        console.log('can not find user')
        res.json({error})
    }
}

userController.profile = async (req,res) =>{

    try {
        const user = await models.user.findOne({
            where:{id: req.headers.authorization}
        },{
            include:{model: models.user}
        })
        console.log(user)
        res.json({user})
    } catch (error) {
        console.log(error);
    }
}

module.exports = userController