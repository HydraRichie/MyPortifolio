const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("./Auth/connect")
app.use(express.json())
app.use(require("./Detailes/contact"))
const PORT=5000;
app.get("/",(req,res)=>
{
    res.send("these is home page");
})
app.get("/about",(req,res)=>
{
    res.send("these is About page");
})
app.get("/contact",(req,res)=>
{
    res.send("these is contact page");
})
app.listen(PORT,()=>
{
    console.log(`The port is running at ${PORT}`);
})