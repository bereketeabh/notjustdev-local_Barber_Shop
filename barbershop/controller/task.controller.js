const Taskservices = require("../services/task.services")

exports.Taskcontroller  = async(req,res,next)=>{
     try{
    const {userid,title,desc} = req.body
    const CallTaskService = await Taskservices.TaskRegister(userid,title,desc)
    res.json({status:true, success:"Succefully task saved! "})
     }
     catch(error){
        throw error
     }

}
exports.GetTaskController  = async(req,res,next)=>{
   try{
  const {userid} = req.body;

  let todo = await Taskservices.GetTask(userid);
   console.log(todo)
  res.json({status:true, success:todo});
   }
   catch(error){
      throw error
   }

}
exports.DeleteTask  = async(req,res,next)=>{
   try{
  const {_id} = req.body;

  let todo = await Taskservices.DeletTask(_id);
  res.json({status:true, success:"successfully deleted"});
   }
   catch(error){
      throw error
   }
}