
const mongoose=require("mongoose");
const express=require("express");
const router=express.Router();
const Info=require("../Auth/connect")
require("../Auth/connect")

router.post("/contact",(req,res)=>
{
    const {name,email,message}=req.body;
    console.log(name);
    console.log(email);
    console.log(message);




const info=new Info({name,email,message});


info.save().then(()=>
{
    res.status(404).json({message:"Submitted Thank You!"})
})
.catch((err)=>
{
    res.json("Error Please Try For Some Time")
})
});
module.exports=router;