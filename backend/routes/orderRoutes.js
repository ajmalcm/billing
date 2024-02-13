const router=require("express").Router();
const {newOrder, allOrders}=require("../controllers/orderController")

router.post("/newOrder",newOrder);
router.get("/allOrders",allOrders);

module.exports=router;