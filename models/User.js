import mongoose from "mongoose"
const userSchema = mongoose.Schema({
   name :{
     type: String,
     required:true,
     trim:true
   },

   email :{
    type: String,
    required:true,
    unique: true,
    trim:true
  },

  password :{
  type: String,
  required:true,
  trim:true
  }
})

const userModel = mongoose.model("user", userSchema);

export default userModel;