const Conversation = require("../models/conversationmodel");
const Message = require("../models/messagemodel");

 

 const sendmessage=async(req,res)=>{
    try{

        const senderid=req.id;
                const receiverid=req.params.id;
                const{message}=req.body;

                let pastconversation = await Conversation.findOne({participants:{$all:[senderid,receiverid]}})
                // if(!pastconversation){
                //     let newconversation=await  Conversation.create({participants:[senderid,receiverid]});
                //     console.log("newcoveration is "+newconversation)
                // }
               if (!pastconversation) {
  pastconversation = await Conversation.create({
    participants: [senderid, receiverid],
    message: []
  });
  console.log("New conversation created:", pastconversation);
}

 const newmsg=await Message.create({
                    senderid,receiverid,message
                })
               

                if(newmsg){
                    pastconversation.message.push(newmsg._id)//conversation na msg ni id j hal jashe pachi tene poplate karvani
                }
                console.log(pastconversation)
                await pastconversation.save()//after  pushing save it  
                return res.status(201).json({message:"you sent msg succesfullt to ", newmsg})
                

    }catch(err){console.log(err)}
 }
const getmessage=async(req,res)=>{//nakho receiverid
    try{

        const senderid=req.id;
                const receiverid=req.params.id;
                  console.log("senderid:", senderid);
    console.log("receiverid:", receiverid);
               // const{message}=req.body;

//                 const conversation=await Conversation.findOne({participants:{$all:[senderid,receiverid]}}).populate({
//   path: "message",
//   model: "Message"
// }).exec(); 
                const conversation=await Conversation.findOne({participants:{$all:[senderid,receiverid]}}).populate("message");
console.log("in get msg") 
    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",

      });
    }
          console.log(conversation.message)
    //        const messageTexts = conversation.message.map(msg => msg.message);

    // console.log("Only messages:", messageTexts);


               return res.status(200).json({
  success: true,
    messages: conversation.message
  // messages: messageTexts,
  // senderid

});
                

    }catch(err){console.log("err from get msg route",err)}
 }

 module.exports={sendmessage,getmessage};