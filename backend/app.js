// import cors from "cors";
const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app=express();

app.use(cookieParser());
dotenv.config({path:"./config.env"});
require('./db/conn');
// const User =require('./model/userSchema');
app.use(express.json());
//We link Router Files
app.use(require('./Router/auth'));
// app.use(cors())

const PORT = process.env.PORT;

// const helmet = require("helmet");

// app.use(
//   helmet({
//     crossOriginResourcePolicy: false,
//   })
// );

// const middleware =(req,res,next)=>{
//     console.log('hello my middleware');
//     next();


// } 

// middleware();

// app.get('/UserProfile',(req,res)=>{
//     res.cookie("Test","Developer")
//     res.send('hello UserProfile');

// });
// app.get('/Login',(req,res)=>{
//     res.send('hello Login');

// });

// app.get('/Register',(req,res)=>{
//     res.send('hello Register');

// });
// app.get('/Forgotpassword',(req,res)=>{
//     res.send('hello world');

// });
// app.get('/mdcct',middleware,(req,res)=>{
//     res.send('hello MDCCT');

// });
// app.get('/PreEngineering',(req,res)=>{
//     res.send('hello PreEngineering');

// });

app.listen(PORT, ()=>{
    console.log(`Server is Running at Port ${PORT}`);})