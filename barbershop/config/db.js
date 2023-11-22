const mongoose = require('mongoose')

const connection  =mongoose.createConnection("mongodb://127.0.0.1:27017/Fluttertodo").on('open',()=>{
    console.log("mongodb connected")
}).on('error',()=>{
    console.log("mongodb is not connected")
})
module.exports = connection