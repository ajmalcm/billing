const express=require("express");
const fileUpload=require("express-fileupload");
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const userRoutes=require('./routes/userRoutes');

// middlewares

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173', 
}));
app.use(fileUpload())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

//mainroutes
app.use("/api/v1",userRoutes);

module.exports=app;