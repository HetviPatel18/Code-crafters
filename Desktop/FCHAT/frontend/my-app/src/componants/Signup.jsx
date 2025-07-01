import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setauthuser } from '../redux/userslice';
const Signup = () => {
  const dispatch = useDispatch();
    const BASE_URL=`http://localhost:5000`
    const[sdata,setsdata]=useState({username:"",password:"", gender: ""})
     const navigate = useNavigate();
// useEffect(() => {
//   console.log("Component mounted");
// }, []); // empty array = run only once

 const handleCheckbox = (gender) => {
    setsdata({ ...sdata, gender });

  }
    function handles(ev){
setsdata({...sdata,[ev.target.name]:ev.target.value})
console.log("sign up data is ",sdata)
    }
async function handleSubmit(ev){

      ev.preventDefault();
      console.log("sdat is ",sdata.username);
      try{
        const res=await axios.post(`${BASE_URL}/api/v1/user/register`,sdata,{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true});
        console.log("res is ",res)
        if (res.data.success) {
        navigate("/login");
        console.log("res is ",res.data.Userinfo);
        // ✅ Correct
dispatch(setauthuser(res.data.Userinfo));

      
        //console.log("user info is",res.data.Userinfo)
        toast.success(res.data.message);
      }
    } 
        
      catch(err){toast.error(err.response.data.message);
      console.log(err);console.log(err.message)}
      setsdata({username:"",password:"", gender: ""})
    }
    //    try{
    //     const res=await fetch(`http://localhost:5000/signup`,{
    //   method:"POST",
    //   headers:{"Content-Type":"application/json",},
    //   body:JSON.stringify(sdata)
    // })
    // console.log(res);
    // }
    //    catch(err){console.log("err by signup ",err)}
    //    setsdata({ name: "", password: "" ,email:""});


  return (
    <div>
     <h1 className='text-3xl font-bold text-center'>Signup</h1>
    <form  onSubmit={handleSubmit} >
   
      <input name="username" placeholder="username" value={sdata.username} onChange={handles}/>   
      <input name="password" type="password"  value={sdata.password} placeholder="Password" onChange={handles}  />
           <div><p>Male</p> <input
                type="checkbox"
                checked={sdata.gender === "male"}
                onChange={() => handleCheckbox("male")}
               
                className="checkbox mx-2" /></div> 
                <div><p>feMale</p> <input
                type="checkbox"
                checked={sdata.gender === "female"}
                onChange={() => handleCheckbox("female")}
               
                className="checkbox mx-2" /></div> 

     {/* <h1><div>{fdata.name}</div></h1> 
          <h1><div>{fdata.password}</div></h1>  */}
  <p className='text-center my-2'>Already have an account? <Link to="/login"> login </Link></p>
      <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Singup</button>
    </form>
    </div>
  )
}

export default Signup
