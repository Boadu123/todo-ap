import { Router } from "express";
import {
  getProfile,
  updateProfile,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";
import { isAuthenticated } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.post("/users/register", userRegister);

userRouter.post("/users/login", userLogin);

userRouter.get("/users/me", isAuthenticated, getProfile);

userRouter.post("/users/logout", isAuthenticated, userLogout);

userRouter.post(
  "/user/me",
  isAuthenticated,
  userAvatarUpload.single("avatar"),
  updateProfile
);

export default userRouter;
