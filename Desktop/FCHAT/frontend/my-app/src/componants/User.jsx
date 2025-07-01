import React from 'react'
import { useSelector } from 'react-redux'
const User = () => {
const userdata = useSelector((state) => state.user.getuserr);
console.log("🟢 Redux getuserr state:", userdata);
    
  if (!userdata || !Array.isArray(userdata)) {
    return <div>Loading or no user data</div>;
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
<div>   {userdata.map((el) => (
        <div key={el._id} className="avatar flex items-center gap-4 mb-3">
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
