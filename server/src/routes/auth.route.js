import { Router } from "express";
import { login, signup } from "../controllers/auth.controller.js";

const authRouter = Router();

// authRouter.get("/", (req, res) => {
// 	console.log("assajkhaskashkj");
// 	res.send("Hello from Auth API");
// });
authRouter.post("/signup", signup);
authRouter.post("/login", login);

export default authRouter;
