const app = require("./app")
const connection = require("./config/db")
const UserModel = require("./model/user.model")
const Taskmodel = require("./model/tasks.model")

const port= 3000

app.listen(port , ()=>{
    console.log(`listing to port ${port}`)
})