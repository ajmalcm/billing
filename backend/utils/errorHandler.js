

const errorHandler=(res,err)=>{
    if (err.name=="JsonWebTokenError")
    {
        return res.status(400).json({success:false,message:"JsonToken is invalid. Try again"})
    }
    if(err.name=="TokenExpireError")
    {
        return res.status(400).json({success:false,message:'JsonWebToken is expired try again'})
    }
     res.status(500).json({success:false,message:err.message})
}

module.exports=errorHandler;