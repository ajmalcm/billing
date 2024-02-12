const Order=require("../models/OrderModel");
const  errorHandler =require("../utils/errorHandler");

exports.newOrder=async(req,res)=>{
    try{
        const {orderItems,customer,user,counter,taxPrice,itemsPrice,totalPrice}=req.body;

        // ({email}=customer)
        if(orderItems&&customer&&user&&counter&&taxPrice&&itemsPrice&&totalPrice)
        {
            const order=await Order.create({orderItems,customer,user,counter,taxPrice,itemsPrice,totalPrice});
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