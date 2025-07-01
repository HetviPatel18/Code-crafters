const mongoose=require("mongoose");
const User=require("./usermodel.js")

const msgschema=new mongoose.Schema({
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },receiverid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
    message:{
        type:String
    }},{timestamps:true})

     const Message=mongoose.model("Message",msgschema);
     module.exports=Message;