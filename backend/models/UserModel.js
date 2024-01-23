const mongoose =require("mongoose");
const validator=require("validator");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const dotenv=require("dotenv")
dotenv.config();
const userModel=new mongoose.Schema({
name:{
    type:String,
    minLength:[4,"Name should be atleast 4 characters"],
    maxLength:[20,"Name cannot exceed more than 20 characters"],
    require:[true,"Name cannot be empty"]
},
email:{
    type:String,
    require:[true,"Please enter the email."],
    validate:[validator.isEmail,"Please enter a valid email"]
},
password:{
    type:String,
    minLength:[8,"Password must contain atleast 8 characters."],
    require:[true,"Password cannot be empty."],
    select:false
},
},{
    timestamps:true
}
)

userModel.methods.getJwtToken=function()
{
return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRES
})
}

userModel.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


module.exports=mongoose.model("User",userModel)