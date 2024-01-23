const express=require("express");
const { registerUser, loginUser, loadUserDetails, logOut } = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middlewares/auth");
const router=express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/me",isAuthenticatedUser,loadUserDetails);
router.delete("/logout",logOut);

module.exports=router;