const User=require("../models/UserModel");
const  errorHandler  = require("../utils/errorHandler");
const dotenv=require("dotenv");
dotenv.config;
const bcrypt=require('bcryptjs');
const sendToken = require("../utils/sendToken");

exports.registerUser=async(req,res)=>{
    try{
        const {name,email,password,confirmPassword}=req.body;

        const user=await User.findOne({email});
        if(!name||!email||!password||!confirmPassword)
        {
            return res.status(500).json({success:false,message:"Please fill all the fields properly."})
        }
        else if(password!==confirmPassword)
        {
            return res.status(500).json({success:false,message:"password and confirmPassword does not match."})
        }
        else if(user)
        {
            return res.status(500).json({success:false,message:"User with this email already exists."})
        }
        else
        {
            const hashedPassword=await bcrypt.hash(password,10);
    
            const newUser=await User.create({name,email,password:hashedPassword});
    
            // try to wrap this into a send token function
            sendToken(newUser,201,res);
        }
    }
    catch(err)
    {
        errorHandler(res,err);
    }
}

exports.loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(500).json({success:false,message:"Please enter email and password"})
        }

        const user=await User.findOne({email}).select("+password");

        if(!user)
        {
            return res.status(401).json({success:false,message:"Invalid credentials"})
        }
  
          const validPassword=await user.comparePassword(password);
          if(!validPassword)
          {
            res.status(400).json({success:false,message:"Invalid Credentials"})
          }
          else
          {
            sendToken(user,200,res);
          }
        
    }
    catch(err)
    {
        errorHandler(res,err)
    }
}

exports.loadUserDetails=async (req,res,next)=>{
    try{
        const user=await User.findById(req.user.id);

        if(!user)
        {
            return res.status(404).json({success:false,message:"Please login to access the resource"})
        }
        else
        res.status(200).json({success:true,user})
    }
    catch(err)
    {
        errorHandler(res,err)
    }
}

exports.logOut=async(req,res)=>{
    try{
 
            res.status(200).
            cookie("billtoken",null,{expires:new Date(Date.now()),httpOnly:true}).
            json({success:true,message:"User Logged-Out"})
    }
    catch(err)
    {
        errorHandler(res,err)
    }
}
