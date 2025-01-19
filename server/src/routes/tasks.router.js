import { Router } from "express";
import { getTasks } from "../controllers/tasks.controller.js";

const tasksRouter = Router();

tasksRouter.get("/:id", getTasks);

export default tasksRouter;
