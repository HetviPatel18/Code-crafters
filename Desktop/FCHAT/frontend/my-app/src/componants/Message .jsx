import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { logined } from '../redux/userslice';

const Message  = () => {
  const [messages, setMessages] = useState([]);
  const data=useSelector((state)=>{return state.user.selected})
  const loginid=useSelector((state)=>{return state.user.logindata})
  useEffect(() => {
    const fetchmsg = async () => {
      if (!data?._id) {
        console.log("⏳ Waiting for user selection...");
        return;
      }

      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:5000/api/v1/message/${data._id}`
        );
        console.log("✅ Messages fetched:", res.data);
        const massage=res;
        console.log(messages)
        console.log("res from 25 ",res);//line 25
         setMessages(res.data.messages);
          console.log(" line 26 from Message comp senderid",loginid,"reciver is ",data._id)
      } catch (err) {
        console.log("❌ Error from Message:", err);
      }
    };

    fetchmsg();
  }, [data]);
  return (
    <div>
        <h2> this msg box............</h2>
      {messages.map((msg, idx) => (
  <div
    key={idx}
    className={`chat ${msg.senderid === data._id ? 'chat-end' : 'chat-start'}`}
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
