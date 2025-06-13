// npm i mongoose
// import mongoose
var mongoose = require("mongoose");
//db connection
// Syntax--->  mongoose.connect("url").then(()=>{}).catch((err)=>{})
mongoose.connect("mongodb+srv://eldhoaby2005:eldho@cluster0.rkwmqre.mongodb.net/Employeedb?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Db connected")
})
.catch((err)=>{
    console.log("err",err)
});