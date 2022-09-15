import express from "express"
import StudentContoller from '../controllers/studentContoller.js'
import { checkUserAuth } from "../middlewares/authMiddleware.js";
const studentrouter = express.Router();


// Router level Middleware
studentrouter.use("/student", checkUserAuth)
studentrouter.get("/student", StudentContoller)

export default studentrouter;