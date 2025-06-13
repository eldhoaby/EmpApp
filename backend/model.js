var mongoose = require("mongoose");
var empSchema = mongoose.Schema({
    name:String,
    age:Number,
    dep:String,
    salary:Number,
});
// model creation
var empModel=mongoose.model("employee",empSchema);
module.exports = empModel;
