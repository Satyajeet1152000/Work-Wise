import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import authRouter from "./routes/auth.route.js";
import tasksRouter from "./routes/tasks.router.js";
import UserRouter from "./routes/user.router.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

// ========== Middleware ==========
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(cors());
app.use(morgan("combined"));
app.use(helmet());
app.use(
	rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 100,
		message: "Too many requests",
	})
);

// ========== Routes ==========
app.use("/api/auth", authRouter);
app.use("/api/user", UserRouter);
app.use("/api/tasks", tasksRouter);

app.get("/", (req, res) => {
	res.send("Hello from API");
});

app.use(errorHandler);

app.use((err, req, res, next) => {
	res.status(err.status || 404).json({
		status: "error",
		message: err.message || "Route not found",
	});
});
// ========== Server ==========
mongoose
	.connect(DB_URL)
	.then(() => {
		console.log("Mongoose Database connected successfully.");
		app.listen(PORT, () => {
			console.log(
				`Server is listinning on port : ${PORT}, \n https://localhost:${PORT}`
			);
		});
	})
	.catch((err) => {
		console.log(`Mongoose Database connection error. : ${err}`);
	});
