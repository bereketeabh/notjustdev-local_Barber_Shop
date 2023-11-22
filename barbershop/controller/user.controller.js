const UserService = require("../services/user.services")
exports.register= async(req,res,next)=>{
    try{
     const {email,password} = req.body;
     const succesRes = await UserService.Registration(email,password)
     res.json({status:true , succes:"user is succesfully Registerd"})
    }
    catch(error){
     throw error
    }
}
exports.login= async(req,res,next)=>{
    try{
     const {email,password} = req.body;
     const user = await UserService.Login(email);
      if(!user)
      {
        throw new Error("user don't exist")
      }
     const isMatch = await user.comparePassword(password)
     if(isMatch == false)
     {
      res.status(200).json({status:false})

     }

  let tokenData = {_id:user._id, email:user.email}
   const token = await UserService.GenerateToken(tokenData,"secretkey","1h")

   res.status(200).json({status:true,token:token })
    }
    catch(error){
     throw error
    }
}