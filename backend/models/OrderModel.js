const mongoose=require("mongoose");

const orderModel=new mongoose.Schema({
    orderItems:[{
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
    counter:{
        type:Number,
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
            default:"000000"
            // required:true
        },
        status:{
            type:String,
            default:"success"
            // required:true
        }
    }
},{
    timestamps:true
});

module.exports=mongoose.model("Order",orderModel);