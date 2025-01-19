import User from "../models/users.model.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const user = await User.create({ name, email, password });
		const token = jwt.sign(
			{ id: user._id, name, email },
			process.env.JWT_SECRET,
			{
				expiresIn: "1h",
			}
		);

		res.status(201).json({ success: true, token });
	} catch (error) {
		res.status(400).json({ success: false, error: "User already exist" });
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

		user.token = jwt.sign(
			{
				id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
			process.env.JWT_SECRET
		);

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.error("Error during authorization:", error);
		return null;
	}
};
