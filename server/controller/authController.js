
const { comparePassword, hashPassword } = require("../utils/authHelper.js")

const userModel = require("../models/userModels")
const JWT = require("jsonwebtoken")

const SECRET_KEY = "8SDFHBVRT253KKS734";


const signupController = async (req,res) => {
    try{
        const {name, email, password} = req.body;

        //validations
        if(!name){
            return res.send({message:"Name is Required"});
        }
        if(!email){
            return res.send({message:"Email is Required"});
        }
        if(!password){
            return res.send({message:"Password is Required"});
        }
        
     

        //check user
        const existingUser = await  userModel.findOne({email});

        //existing user
        if(existingUser){
            return res.status(200).send ({
                success: false,
                message: "Already Register Please Login ",

            });
        }

        //register user
        const hashedPassword = await hashPassword(password);

        //save
        const user = await new userModel({
            name,
            email,
            password: hashedPassword,
            
        }).save();

        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            user,
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: "Error in Registeration",
            error,
        })

    }


};


//POST LOGIN
const signinController = async(req, res) => {
    try{
        const {email, password} = req.body;
        
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message: "Invalid email or password"
            })
        }


        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registerd"
            })
        }
        
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            })
        }

        //token
        const token = await JWT.sign({_id: user._id}, SECRET_KEY, {
            expiresIn: "7d",
        });

        res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
               
                email: user.email,
               
            },
            token,
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in login",
            error
        })
    }

};




// //auth controller
// const authCont = async() => {
//     try{
//         const user = await userModel.findOne({_id:req.body.userId})
//         if(!user){
//             return res.status(200).send({
//                 message:"User not found",
//                 success: false
//             })
//         }else{
//             res.status(200).send({
//                 success:true,
//                 data:{
//                     name:user.name,
//                     email:user.email,
//                 },
//             });
//         }

//     }catch(error){
//         console.log("==============>",error);
//         res.status(500).send({
//             message:"auth error",
//             success:false ,
//             error
//         })
//     }

// }


module.exports = {signupController, signinController};





