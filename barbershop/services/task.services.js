const TaskModel = require("../model/tasks.model")

class TaskService {
    static async TaskRegister(userid,title,desc) {

        try{
      const Taskdata = new TaskModel({userid,title,desc})
      return await Taskdata.save()
        }catch(err){
         throw err
        }
    }
    static async GetTask(userId)
    {
      try{
     const Tododata = await TaskModel.find({userid: userId})
     return Tododata;
      }
      catch(err){
        throw err
      }
    }
    static async DeletTask(userId)
    {
      try{
     const Tododata = await TaskModel.deleteOne({_id: userId})
     return Tododata;
      }
      catch(err){
        throw err
      }
    }
  
}
module.exports = TaskService