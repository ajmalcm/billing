const app =require("./app");
const dbConnect=require("./utils/dbConnect");

// connection to mongodb

dbConnect();

// listening on port
app.listen(process.env.PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    console.log(`listening to port:${process.env.PORT}`)
})

