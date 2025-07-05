import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { logined } from '../redux/userslice';

const Message  = ({ messages }) => {

  const data=useSelector((state)=>{return state.user.selected})
  const loginid=useSelector((state)=>{return state.user.logindata})
 
  return (
    <div>
        <h2> this msg box............</h2>
      {messages.map((msg, idx) => (
  <div
    key={idx}
    className={`chat ${msg.senderid === data._id ? 'chat-start' : 'chat-end'}`}
  >
    <div className="chat-bubble">
      {msg.message}
    </div>
  </div>
))}

      {/* {messages.map((msg, idx) => (
        <div
          key={idx}
         // className={`chat ${msg.senderid === senderId ? 'chat-end' : 'chat-start'}`}
        >
          <div className="chat-bubble chat-end">{msg}</div>
        </div>
      ))} */}
      
        
     
    </div>
  )
}

export default Message 
