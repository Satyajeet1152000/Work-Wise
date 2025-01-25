import User from "../models/users.model.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
	const { name, email, password } = req.body;

	// console.log(name, email, password);
	try {
		const user = await User.findOne({ email });

		if (user) {
			// console.log("user found");
			return res
				.status(400)
				.json({ success: false, error: "User already exist" });
		}
		// console.log("user not found");
		// console.log(user);
		const newUser = await User.create({
			name,
			email,
			password,
			emailVerified: null,
			role: "employee",
		});

		newUser.save();

		res.status(201).json({
			success: true,
			message: "Registration successful",
		});
	} catch (error) {
		// console.log(error);
		res.status(400).json({ success: false, error: "Server Error" });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(400)
				.json({ success: false, error: "Email not found" });
		}

		if (user.password !== password) {
			return res
				.status(400)
				.json({ success: false, error: "Invalid password" });
		}

		user.emailVerified = new Date();

		const token = jwt.sign({ ...user }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		res.status(200).json({ success: true, token });
	} catch (error) {
		console.error("Error during authorization:", error);
		return null;
	}
};
