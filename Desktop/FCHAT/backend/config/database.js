const dotenv = require('dotenv');

const mongoose = require('mongoose');
dotenv.config();
const connectdb=async()=>{
await mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully on Qonnect"))
  .catch(err => console.error("MongoDB connection error:", err));}
module.exports = connectdb;
