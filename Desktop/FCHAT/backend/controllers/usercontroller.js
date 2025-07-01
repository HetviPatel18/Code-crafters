const User=require("../models/usermodel.js")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
      const register=async(req,res)=>{
const{username,password,gender}=req.body;

 
    try{
if(!username || !password || !gender){
   return  res.status(400).json({message:"all fields are required ........bro"})
}
const user=await User.findOne({username});
if(user){
      return   res.status(400).json({message:"user is alredy registered try new.."})

}
const hashedp=await bcrypt.hash(password,10);//password
const male="https://avatar.iran.liara.run/public/boy";
const female="https://avatar.iran.liara.run/public/girl";

    const newuser=await User.create({username,password:hashedp,gender,
        photo:(gender==='male'?male:female)
    })
    console.log(newuser);
     return res.status(201).json({
      message: "yay you registered",
      success: true,
      Userinfo: newuser
    });

    }
    catch(err){
console.log(err)
    }
    // return res.status(201).json({message:"yay you registered",success:true,Userinfo:newuser})
}


const login=async(req,res)=>{
const{username,password}=req.body;

 
    try{
if(!username || !password){
   return res.status(400).json({message:"all fields are required ........bro"})
}
const user=await User.findOne({username});
if(!user){
        return res.status(400).json({message:"user  not found :(",success:false})

}

const fpassword=await bcrypt.compare(password,user.password);
if(!fpassword){
    return res.status(400).json({message:"password  not found match :(",success:false})

}
const tokendata={userid:user._id}
const token=jwt.sign(tokendata,process.env.SECRET);
return res.status(200).cookie("token",token,{ httpOnly: true,
    sameSite: "Lax",
    secure: false}).json({
    success:true,
    id:user.id,
    username:user.username,
    password:user.password,
    photo:user.photo

        
    })
}
//    return res.status(201).json({message:"yay you registered",success:true})}

    catch(err){
console.log(err)

 return res.status(500).json({ message: "Server error during login", success: false });
    }}


    const logout=async(req,res)=>{
        try{
           return res.status(200).cookie("token","").json({message:"you logout succesfully"})
        }catch(err){console.log(err)}

    }
    //=====================================
    const getuser=async(req,res)=>{
        try{
            const oid=req.id;
            const otherusers=await User.find({_id:{$ne:oid}}).select("-password");
            console.log("otherusers aree ",otherusers)
           return res.status(200).json(otherusers)


        }catch(err){
            console.log(err)
        }
    }
    //=======================================================================================================
module.exports = { register, login, logout ,getuser};
