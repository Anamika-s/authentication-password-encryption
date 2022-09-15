import jwt from "jsonwebtoken"
import userModel from "../models/User.js"

export var checkUserAuth  = async(req,res,next)=>
{
  console.log("Inide Middleware")
let token
const {authorization} = req.headers;
if(authorization && authorization.startsWith("Bearer"))
{
  console.log("It conatine Bearer")
  try{
    token = authorization.split(' ')[1]

    // Verify token

    const {email} = jwt.verify(token, process.env.SECRET_KEY)
console.log("EMAIL IS  " + {email})
    // Get User from this token
    req.user = await userModel.findOne({email:email})
    next()
  }
catch(error)
{
  console.log(error)
  res.status(401).send({"status" :"failed", "message" :"Unauthorised User"})
}
}
}