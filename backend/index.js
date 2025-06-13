var express=require ("express");
require('./db')

var emp=require('./model');
//to connect with frontend we need to import cors policy
//so install cors and import it
var cors=require("cors");


var app =express();
var port=3000;

//
app.use(express.json());
//this connects frontend and backend
app.use(cors());


//  middleware JSON ayond
app.use(express.json());


// app.get("/",(req,res)=> {
//      res.send("hello nodemon");
// });

// api to add data to db 
app.post('/',(req,res)=>{
try {
    emp(req.body).save();
    res.send("Data saved Successfully !!")
} catch (error) {
    res.send(error)   
}   

});

// api to view all added data in connection
app.get("/",async(req,res)=>{
    try {
      var employess=await emp.find();
      res.send(employess) ;
    } catch (error) {
      res.send(error);   
    }
});

// api to delete a particular data in the collection
app.delete('/:id',async(req,res)=>{
    try {
        console.log(req.params.id);
        await emp.findByIdAndDelete(req.params.id);
        res.send("Data deleted Successfully!!")
    } catch (error) {
        res.send(error)
        
    }
});

//
app.put('/:id',async(req,res)=>{
    try {
        await emp.findByIdAndUpdate(req.params.id,req.body);
        res.send("Emp data updated successfully!!!")
    } catch (error) {
        res.send(error)
    }
});

// Making port into listening mode
app.listen(port,() => {
    console.log(`${port} is up`);
});