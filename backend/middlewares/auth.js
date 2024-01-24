const errorHandler= require("../utils/errorHandler");
const User=require("../models/UserModel")
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();
exports.isAuthenticatedUser=async(req,res,next)=>{
    try{
        const {billtoken}=req.cookies;
        console.log(billtoken)
        if(!billtoken)
        {
            return res.status(401).json({success:false,message:"Please Login to access this resource"})
        }
        const decodedData=jwt.verify(billtoken,process.env.JWT_SECRET);
        
        req.user=await User.findById(decodedData.id);

        next();

    }
    catch(err)
    {
        errorHandler(res,err);
    }
}
