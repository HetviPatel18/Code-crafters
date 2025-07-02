import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
const Message  = () => {
  const [messages, setMessages] = useState([]);
  const data=useSelector((state)=>{return state.user.selected})
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
        const massage=res.data;
         setMessages(res.data.messages);
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
         // className={`chat ${msg.senderid === senderId ? 'chat-end' : 'chat-start'}`}
        >
          <div className="chat-bubble chat-bubble-primary">{msg}</div>
        </div>
      ))}
        {/* <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary">{}</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary">
    Put me on the Council and not make me a Master!??
  </div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-accent">
    That's never been done in the history of the Jedi.
  </div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-neutral">It's insulting!</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
</div> */}
     
    </div>
  )
}

export default Message 
