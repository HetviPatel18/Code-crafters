const { default: mongoose } = require("mongoose")


const usermodel=new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },  password:{
        type:String,
        required:true
    },
    photo:{
type:String,
default:""

    },
    gender:{
                type:String,
enum:["male","female"]
    }
})

const User=mongoose.model("User",usermodel);
module.exports=User;