const express = require('express')
const body_parser = require('body-parser')
const userRouter = require("./routers/user.Router")
const taskRouter = require("./routers/task.router")

const app = express()

app.use(body_parser.json())
app.use('/', userRouter)
app.use('/', taskRouter)
module.exports = app;