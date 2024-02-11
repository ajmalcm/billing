const router=require("express").Router();
const {newOrder}=require("../controllers/orderController")

router.post("/newOrder",newOrder);

module.exports=router;