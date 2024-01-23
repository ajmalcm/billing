const mongoose=require("mongoose");

const productModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1,
        required:true
    },
    price:{
        type:Number,
        default:0,
        required:[true,"price cannot be empty"]
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
},{
    timestamps:true
})

module.exports=mongoose.model("Product",productModel);