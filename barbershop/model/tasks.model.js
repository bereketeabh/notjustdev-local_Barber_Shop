const db = require('../config/db')
const mongoose = require('mongoose')
const UserModel = require('./user.model')
const {Schema} = mongoose

const TaskSchema = new Schema ({
    userid:{
        type:String,
        required:true,
        // required:true,

    },
    title:{
        type:String,
        required:true,

    },
    desc:{
        type:String,
        required:true
    }
})
const TaskModel = db.model("Task", TaskSchema)

module.exports = TaskModel