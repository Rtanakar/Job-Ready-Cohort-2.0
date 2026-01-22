import { Router } from "express";
import { getAllUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/get-all-users", getAllUser);

export default userRouter;
