const Customer=require("../models/CustomerModel");
const errorHandler = require("../utils/errorHandler");

exports.registerCustomer=async(req,res)=>{
    try{
        const {name,phone,email}=req.body;
        let customer=await Customer.findOne({email});
        if(!customer)
        {
            customer=await Customer.create({name,phone,email})
        }
        res.status(201).json({success:true,customer,message:"found or created new customer!"})
    
    }
    catch(err)
    {
        errorHandler(res,err);
    }
}

exports.getAllCustomers=async(req,res)=>{
    try{
            const customers=await Customer.find();
            res.status(200).json({success:true,customers})
    }
    catch(err)
    {
        errorHandler(res,err)
    }
}