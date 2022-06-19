const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser=require("body-parser")
const path =require("path");

//creating an instance of express app
const app =express();

//configuring environment variables
dotenv.config({path:"./config.env"});

//log requests
app.use(morgan("tiny"));

//parse requests to body parser
app.use(bodyparser.urlencoded({extended:true}))

//setting view engine
//app.set("views",path.resolve(__dirname,"views/ejs"); //this we set if we dont specify ejs files in views folder
app.set("view engine","ejs");

//loading assests
app.use('/assets',express.static(path.resolve(__dirname,"assets")))
const PORT= process.env.PORT;
app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/addUser',(req,res)=>{
    res.render("addUser");
})
app.listen(PORT,()=>{
    console.log(`hey i am using PORT ${PORT}`);
});