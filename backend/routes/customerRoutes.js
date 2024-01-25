const { registerCustomer, getAllCustomers } = require("../controllers/customerCOntroller");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router=require("express").Router();

router.post("/newCustomer",isAuthenticatedUser,registerCustomer);
router.get("/allCustomers",isAuthenticatedUser,getAllCustomers);

module.exports=router;