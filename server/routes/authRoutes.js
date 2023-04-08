const express = require("express");

const {signupController, signinController, authCont } = require("../controller/authController")
const {requireSignIn } = require("../middleware/authMiddleware")

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post("/signup", signupController);

//LOGIN || POST
router.post("/login", signinController);

//Auth || POST
// router.post("/getUserData", requireSignIn , authCont, (req,res) => {
//     console.log("success" );
//     res.status(200).send({ok:true});
// } )



module.exports = router;