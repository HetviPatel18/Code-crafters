import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selecteduser } from '../redux/userslice';
import { useEffect } from 'react';
const User = () => {
  const dispatch=useDispatch();
  const selecteddata=useSelector((state)=>{return state.user.selected});
  useEffect(() => {
  console.log("✅ selecteddata changed:", selecteddata);
}, [selecteddata]);

const userdata = useSelector((state) => state.user.getuserr);
//console.log("🟢 Redux getuserr state:", userdata);
 console.log(selecteddata)
    
  if (!userdata || !Array.isArray(userdata)) {
    return <div>Loading or no user data</div>;
  }
  function setdata(el){
    console.log("user dta is ",el)
    dispatch(selecteduser(el))
    console.log(selecteddata)
  }
  return (
    <div>
        {/* <h1>{userdata.map((el)=>{return <h3>{el.username}</h3>})}</h1>
       <div>
       <div><div className="avatar">
  <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    
  </div>&nbsp;&nbsp;&nbsp;&nbsp;<h7>username</h7>
</div></div> */}
<div >   {userdata.map((el) => (
        <div  onClick={()=>{setdata(el)}}  key={el._id} className={`avatar flex items-center gap-4 mb-3 cursor-pointer rounded-lg p-2 ${
        selecteddata?._id === el._id ? 'bg-white text-yellow-500' : 'bg-transparent text-black'
      }`}>
          <div className="w-14 rounded-full">
            <img src={el.photo} alt="user avatar" />
          </div>
          <span>{el.username}</span>
        </div>
      ))}</div>
    </div>
   
  )
}

export default User
