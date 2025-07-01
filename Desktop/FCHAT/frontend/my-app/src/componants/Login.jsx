import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
   const navigate = useNavigate();
  const [fdata, setfdata] = useState({username:"",password:""})
 function handle(ev){
const data=ev.target.value;
setfdata({...fdata,[ev.target.name]:ev.target.value})
 }
async function handleSubmit(ev) {
 
 ev.preventDefault();
 try{
        const res=await axios.post(`http://localhost:5000/api/v1/user/login`,fdata,{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true});
        console.log("res is ",res)
if(res.data.success){  toast.success("Login successful!");
  navigate("/get");
}
 }
 catch(err){console.log(err)
  toast.error(err.response.data.message)
  navigate("/login");
  setfdata({username:"",password:""})
 }  setfdata({username:"",password:""})}
//     console.log("Form Data Submitted:", fdata);
//     try{const res=await fetch(`http://localhost:5000/login`,{
//       method:"POST",
//       headers:{"Content-Type":"application/json",},
//       body:JSON.stringify(fdata), credentials: "include",//important
//     })
//     console.log(res); 
  
//   if (res.ok) {
//                 const data = await res.json();
//                 // alert("Successfully logged in");
//                  alert("Successfully logged in");
//   navigate("/info"); 
//                 console.log("Logged in data: ", data);
//             } else {
//                 const errorData = await res.json();
//                 alert("Error: not matched  " + errorData.message);
//             } }catch(err){console.log(err)
//       alert("something wrong baii")
//     }
//     // Later here you can call your backend API to submit the form data
//    setfdata({ name: "", password: "" });
   
  

function check(){

}
  return (
    <div>
      <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}}>
  <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
    I'm centered!<h1>login</h1>
 
      <form  onSubmit={handleSubmit} >
      <input name="username" placeholder="username" value={fdata.username} onChange={handle}/>   
      <input name="password" type="password"  value={fdata.password} placeholder="Password"  onChange={handle} />
     <h1><div>{fdata.username}</div></h1> 
          <h1><div>{fdata.password}</div></h1> 
<p>want to signup <Link to="/signup"> signup </Link>
</p>
      <button type="submit"onClick={check}>Login</button>
      <div><Link to="/data"> data </Link></div>
    </form>
  </div>
</div>
          
   
    </div>
  )
}

export default Login
