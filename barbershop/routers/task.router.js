const router = require('express').Router()
const Taskcontroller = require('../controller/task.controller')

router.post("/addTask",Taskcontroller.Taskcontroller)
router.post("/getTasks", Taskcontroller.GetTaskController)
router.delete("/deleteTask",Taskcontroller.DeleteTask)
module.exports = router