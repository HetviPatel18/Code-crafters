const express = require('express');//ZQIsGFpfL1VOquxL
const app = express();//krishaeducation2020
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const connectdb = require('./config/database');
app.use(cors({
  origin: "http://localhost:5173", // your frontend's origin
  credentials: true, // if you're sending cookies
}));
const userroute=require("../backend/routes/userroute.js");
const messageroute=require("../backend/routes/messageroute.js");

const cookieParser = require('cookie-parser');


//middleware
app.use(express.json());//
app.use(cookieParser())//http://localhost:5000/api/v1/message/send/68597df94e25e8dc4ecf5a51
app.use("/api/v1/user",userroute)//http://localhost:5000/api/v1/user/login
app.use("/api/v1/message",messageroute)//http://localhost:5000/api/v1/message/send/:id

app.get('/', (req, res) => {
  res.send('Qonnect backend is running 🚀');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,async () => {
   await connectdb();
  console.log(`✅ Server running on port ${PORT}`);
});