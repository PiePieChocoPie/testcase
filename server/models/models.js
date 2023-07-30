const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true,autoIncrement:true},
    name: {type: DataTypes.STRING},
    dateBorn:{type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: true},
    linked:{type: DataTypes.STRING,unique:true,allowNull:true},
    password:{type: DataTypes.STRING,allowNull: true}
})
const post_user = sequelize.define('post_user',{
    id: {type: DataTypes.INTEGER, primaryKey: true,autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true}
})

post_user.hasOne(User)
User.belongsTo(post_user)

module.exports = {
    User,
    post_user,
}

