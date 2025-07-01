const jwt=require("jsonwebtoken")


const isauthenticated=async(req,res,next)=>{
    //just verify token 
try{
   const token = req.cookies.token; console.log("🍪 Cookies received:", req.cookies); // 👈 add this line
//first we sent on rs now we are getting it 
const decoded=jwt.verify(token,process.env.SECRET);
console.log("decoded data after verify is " + JSON.stringify(decoded, null, 2));
if(!decoded){
   return  res.status(401).json({message:"invalid token bhai"})
}
req.id=decoded.userid;
console.log("req.id id " +req.id)
next()
}catch(err){
    console.log(err)
     return res.status(401).json({ message: "Invalid or missing token", success: false });
}
}
module.exports=isauthenticated;