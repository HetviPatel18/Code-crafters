import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useStore } from 'react-redux';
// import  { useEffect } from 'react'
import User from './User';
import { useDispatch } from 'react-redux';
import { getuser } from '../redux/userslice';
import Message from './Message ';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
const Getother = () => {   const data=useSelector((state)=>{return state.user.selected})
 const navigate=useNavigate();
    const[user,setuser]=useState([])
    const [message,setmsg]=useState([])
    const dispatch = useDispatch();
const send= async(ev)=>{
         ev.preventDefault();
        //  alert(msg);
         try{
         const res = await axios.post(
  `http://localhost:5000/api/v1/message/send/${data._id}`,
  { message: message },  // 👈 make sure 'content' matches backend key
  {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  }
);

        console.log("res from send msg",res)
         }catch(err){console.log("er from senduing ",err)}

         }
    const handlesubmit=async (ev)=>{
         ev.preventDefault();
         try{ axios.defaults.withCredentials = true;
         const res=await axios.get('http://localhost:5000/api/v1/user/get',{  withCredentials: true});
         setuser(res.data)
         console.log("✅ Users received:", res.data); 
           dispatch(getuser(res.data));
         
          
          }
         catch(err){
            console.log(err)
            navigate("/login");
    //          if (
    //   err.response &&
    //   (err.response.status === 401 || err.response.data.message?.includes("token"))
    // ) {
    //   toast.error("You must be logged in to view users.");
    //   //navigate("/login"); // ✅ redirect to login
    // } else {
    //   toast.error("Something went wrong.");
    // }
         }
        
      

        
    }
  return (
    <div>
      other useres
<div style={{ display: 'flex', width: '100%', height: 'calc(100vh - 64px)' }}>
<div style={{
    width: '300px',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '20px',
    boxSizing: 'border-box', overflowY: 'auto'
  }}><form>
        <button onClick={handlesubmit}>get all users</button>
      </form><User/></div>
   <div style={{
  flex: 1,
  width: '1000px',
  backgroundColor: '#3498db',
  color: 'white',
  padding: '20px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column'
}}>
  {/* Scrollable Messages Area */}
  <div style={{
    flex: 1,
    overflowY: 'auto',
    marginBottom: '10px'
  }}>
    <h1>Messages</h1>

  <Message />  
    
  </div>

  {/* Stuck Input at Bottom */}
  <div>
    {/* <input
      placeholder='Type a message...'
      style={{
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        outline: 'none'
      }}
    /> */}<div className="mt-auto w-full p-3 flex items-center gap-2 bg-base-200">
 
  <form onSubmit={send} style={{
      display: 'flex',
      gap: '10px',
      width:"1200px",
      alignItems: 'center',
      backgroundColor: '#2980b9',
      padding: '10px',
      borderRadius: '5px'
    }}> <input
    type="text" value={message} onChange={(ev)=>{ console.log(ev.target.value);return setmsg(ev.target.value)}}
    placeholder="Type your message..."
    className="input input-bordered w-full"
  /><button  className="btn btn-primary">Send</button></form>
  
</div>
  </div>
</div>

        </div>
      
  {/* {user.map((el) => (
  <h3 key={el._id}>{el.username} — {el.gender}</h3>
))} */}


{/* <User/> */}
{/* {user.map((el)=>{return <h2>{el.username}</h2>})} */}

    </div>
  )
}

export default Getother
