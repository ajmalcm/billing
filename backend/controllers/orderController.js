const Order=require("../models/OrderModel");
const  errorHandler =require("../utils/errorHandler");

exports.newOrder=async(req,res)=>{
    try{
        const {orderItems,customer,user,counter,taxPrice,itemsPrice,totalPrice,paymentInfo}=req.body;

        // ({email}=customer)
        if(orderItems&&customer&&user&&counter&&taxPrice&&itemsPrice&&totalPrice&&paymentInfo)
        {
            const order=await Order.create({orderItems,customer,user,counter,taxPrice,itemsPrice,totalPrice,paymentInfo});
            return res.status(201).json({success:true,order})
        }

        else{
            res.status(400).json({success:false,message:"Lack of information to place order."})
        }

    }
    catch(err)
    {
        errorHandler(res,err);
    }
}