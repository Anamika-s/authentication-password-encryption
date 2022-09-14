import express from "express"
import {UserController} from '../controllers/userController.js'
const userrouter = express.Router();


userrouter.post("/register", UserController.Register)
userrouter.post("/login", UserController.Login)

export default userrouter;