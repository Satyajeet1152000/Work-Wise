import { Router } from "express";
import { getUserTasks } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.get("/tasks/:id", getUserTasks);

export default UserRouter;
