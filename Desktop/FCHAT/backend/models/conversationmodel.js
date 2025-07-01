const mongoose=require("mongoose");
const User=require("./usermodel.js")

const Conversationmodel=new mongoose.Schema({

    participants:[{

         type:mongoose.Schema.Types.ObjectId,
         ref:"User"}
    ]
       
    ,
    message:[{

         type:mongoose.Schema.Types.ObjectId,
         ref:"Message"}
    ]},
    {timestamps:true}
       
);

const Conversation=mongoose.model("Conversation",Conversationmodel)
    module.exports=Conversation;