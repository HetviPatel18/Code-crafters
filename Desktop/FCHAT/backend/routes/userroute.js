const express = require('express');
//const { register } = require('../controllers/usercontroller');
//const app = express();//krishaeducation2020
const router=express.Router();
const { register, login, logout, getuser } = require("../controllers/usercontroller.js");
const isauthenticated = require('../middleware/isauthenticated.js');

// const register=require("../controllers/usercontroller.js")
// const login=require("../controllers/usercontroller.js")
// const logout=require("../controllers/usercontroller.js")

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/get").get(isauthenticated,getuser)


module.exports=router;



