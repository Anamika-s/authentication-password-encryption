import userModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export class UserController
{
  static Register = async (req,res)=>
  {
  const { name , email , password } = req.body;
  const user = await userModel.findOne({email:email})
  if(user)
  {
       res.send({"status" :"failed" ,"message" : "Email already exist"})
  }
  else 
  {
    if(name && email && password)
  {
    // if(password === confirm_password)
    // {
      try{
       const salt =  await bcrypt.genSalt(10);
       const hashPassowrd = await bcrypt.hash(password, salt);
       console.log(password)
       console.log(hashPassowrd)
  const userDoc = new userModel(
  {
    name : name,
    email : email,
    password:hashPassowrd
   
  })
  await userDoc.save();

  res.status(201).send(userDoc)
  }
  catch(error)
  {
    res.send(error)
  }
}
// }
else 
{
  res.send({"status":"failed", "message":"All fields are needed"})
}
  }  
  }
  static Login =  async (req,res)=>
  {
     const {email , password} = req.body;
     console.log(email+ "pass" + password)
     const user = await userModel.findOne({email:email})
     console.log("User " + user)
     if(user!==null)
     { const isMatch = await bcrypt.compare(password,user.password )
      if(user.email === email && isMatch)
      {
        // Generate token
        const token = jwt.sign({email:user.email}, process.env.SECRET_KEY, {expiresIn :'5d'})
      res.send({"status":"success", "message" :"user found" , "token" : token})
      }
      else 
      {
        res.send({"status":"failed", "message" :"email or pasword is not valid"})
      
      } 
    }
    else 
    {
      res.send({"status":"failed", "message" :"not a valid user"})
      
    }

}}