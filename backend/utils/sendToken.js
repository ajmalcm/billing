const dotenv=require("dotenv");
dotenv.config();

const sendToken=async(user,statusCode,res)=>{
    const billtoken=await user.getJwtToken();
    const options={
        expires:new Date(Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000),
        httpOnly:true,
        secure:true
    }

    res.status(statusCode).cookie("billtoken",billtoken,options).json({success:true,user})
}

module.exports=sendToken;