
const APIerror = require('../error/APIerror')
const bcrypt = require('bcrypt')
const  {User, post_users} = require('../models/models')
class UserController{
    async addUser (req,res){
        const {FSP,img,dateOfBirth,dateOfHiring,postID} = req.body
        const user = await User.create({FSP,img,dateOfBirth,dateOfHiring})
        return res.json(user)
    }
    async addPost (req,res){
        const {name} = req.body
        const post_User = await post_users.create({name})
        return res.json(post_User)
    }
    async login (req,res){

    }
    async check (req,res,next){
        const {id} = req.query
        if (!id){
            return next(APIerror.badRequest('Не задан ID'))
        }
        res.json(id)

    }
}

module.exports = new UserController()