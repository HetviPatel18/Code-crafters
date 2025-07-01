const express = require('express');
const {sendmessage,getmessage} = require('../controllers/messagecontroller');
const isAuthenticated=require("../middleware/isauthenticated.js")


const router=express.Router();
router.route("/send/:id").post(isAuthenticated ,sendmessage);//jene send karvu hoi eni id receiverid is authenicate middleware ma je id jashe that will be sebder id 
router.route("/:id").get(isAuthenticated,getmessage);//conversationid 

module.exports=router;