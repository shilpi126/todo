
// const JWT = require("jsonwebtoken");
// const SECRET_KEY = require("../key")

// //protected Routes token base
// const requireSignIn = async(req,res, next) => {
//     try{
//         const token =  req.headers['authorization'].split(" ")[1]

//         JWT.verify(token, SECRET_KEY, (err, decode)  => {
//             if(err){
//                 return res.status(200).send({
//                     message: "Auth Failed",
//                     success: false
//                 })
//             }else{
//                 req.body.userId = decode.id;
//                 next()
//             }
//         }) 
//     }catch(error){
//         console.log(error);
//         res.status(401).send({
//             message:"Auth Failed",
//             success: false
//         })
//     }
// }





// module.exports = requireSignIn;