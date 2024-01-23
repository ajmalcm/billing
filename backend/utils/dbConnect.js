const dotenv=require("dotenv");
dotenv.config();
const mongoose=require("mongoose");

const dbConnect=()=>{
    mongoose.connect(process.env.CONNECTION_STRING).
    then(()=>console.log("connected to mongoDB")).
    catch((err)=>console.log(err))
}

module.exports=dbConnect;