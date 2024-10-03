import { Router } from "express";
import { userLogin, userLogout, userRegister } from "../controllers/user.js";


const userRouter = Router();


userRouter.post("/users/register", userRegister);

userRouter.post("/users/login", userLogin);

userRouter.post("/users/logout", userLogout);

export default userRouter;