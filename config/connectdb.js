import mongoose from "mongoose";

const connectDb = async (DatabaseURL) =>
{
  try{
     const dbOptions ={
      dbName :"User"
     };
     await mongoose.connect(DatabaseURL, dbOptions);
    await mongoose.connect(DatabaseURL);
     console.log("Connected successfully")

  }
  catch(error)
  {
    console.log("Not connected")
    console.log(error)
  }
}

export default connectDb;