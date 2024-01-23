const mongoose=require("mongoose");

const orderModel=new mongoose.Schema({
    orderItems:[{
        name:{
            type:String,
            required:true
        },
        quantity:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:"Product",
            required:true
        }
    }],
    customer:{
        type:mongoose.Types.ObjectId,
        ref:"Customer",
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    taxPrice:{
        type:Number,
        default:0,
        required:true
    },
    itemsPrice:{
        type:Number,
        default:0,
        required:true
    },
    totalPrice:{
        type:Number,
        default:0,
        required:true
    },
    paymentInfo:{
        id:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        }
    }
},{
    timestamps:true
});

module.exports=mongoose.model("Order",orderModel);