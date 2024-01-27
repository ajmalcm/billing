const mongoose=require("mongoose");
const validator=require("validator");

const CustomerModel=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:[2,"name should be minimum of 2 characters"]
    },
    phone:{
        type:Number,
        required:true,
        min:[10,"PhoneNo should be 10 numbers"]
    },
    email:{
        type:String,
        required:[true,"E-mail cannot be empty"],
        validate:[validator.isEmail,"Enter a proper email"]
    },
    date:{
        type:Date,
        default:Date.now()
    },
    paymentId:{
        type:String,
        default:"0"
    },
    orderId:{
        type:String,
        default:"0"
    }

},{
    timestamps:true
})

module.exports=mongoose.model("Customer",CustomerModel);
