import { Router } from "express";
import { getProfile, updateProfile, userLogin, userLogout, userRegister } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";

const userRouter = Router();


userRouter.post("/users/register", userRegister);

userRouter.post("/users/login", userLogin);

userRouter.get("users/me", getProfile);

userRouter.post("/users/logout", userLogout);

userRouter.post("/user/me", userAvatarUpload.single("avatar"), updateProfile )

export default userRouter;