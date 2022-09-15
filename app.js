import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import express from "express"
import connectDb from "./config/connectdb.js";
import userrouter from "./routes/userRoutes.js";
import studentrouter from "./routes/studentRoutes.js";
import {checkUserAuth} from './middlewares/authMiddleware.js'
const app = express();  
const DatabaseURL = process.env.DATABASE_URL;

const port = process.env.PORT
// CORS Policy
app.use(cors()) 

// JOSN
app.use(express.json())
app.use("/", studentrouter)
app.use("/api", userrouter)
// Database Connection
connectDb(DatabaseURL)
app.listen(port, ()=> { console.log(`Server listening at ${port}`)})