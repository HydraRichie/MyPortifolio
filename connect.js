const mongoose=require("mongoose");


const db="mongodb+srv://Keshav:9110476341@cluster0.oim8i.mongodb.net/Database?retryWrites=true&w=majority"
mongoose.connect(db).then(()=>
{
console.log("Connection SuccesFull")
})
.catch((err)=>
{
    console.log("No connection")
})

const Userschema=new mongoose.Schema(
    {
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    message:
    {
        type:String,
        required:true
    },
})
const Info=mongoose.model("Detailes",Userschema);
module.exports=Info;