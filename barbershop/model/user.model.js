const mongoose = require('mongoose')
const {Schema} = mongoose
const bcrypt = require("bcrypt")
const db=  require("../config/db")
const userSchema = new Schema({
    email:{
       type:String,
       required: true,
       unique: true
    },
    password: {
        type:String,
        required: true
    }
})

userSchema.pre('save', async function (){
    try{var user = this
        const salt = await(bcrypt.genSalt(10))
        const hashedpassowrd = await bcrypt.hash(user.password, salt)
        user.password = hashedpassowrd
    }
    catch (error){
   throw error
    }
})


userSchema.methods.comparePassword  = async function(UserPassword)
    {
        try{
    const isMatch = await bcrypt.compare(UserPassword, this.password)
    return isMatch
        }
        catch(error){
            throw error
        }
    }  

    
const UserModel = db.model("User", userSchema)

module.exports =  UserModel