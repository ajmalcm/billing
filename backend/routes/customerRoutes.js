const { registerCustomer } = require("../controllers/customerCOntroller");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router=require("express").Router();

router.post("/newCustomer",isAuthenticatedUser,registerCustomer);

module.exports=router;