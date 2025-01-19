const authenticate = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({
			status: "error",
			message: "Unauthorized: Missing Authorization Header",
		});
	}

	const token = authHeader.split(" ")[1];

	if (token !== process.env.TOKEN) {
		return res.status(401).json({
			status: "error",
			message: "Unauthorized: Invalid Token",
		});
	}
	next();
};

const autherize = (roles) => {
	return (req, res, next) => {
		const role = req.headers.role;

		if (role !== "admin" && role !== "student") {
			return res.status(401).json({
				status: "error",
				message: "Forbidden: Invalid Role",
			});
		}

		if (!roles.includes(role)) {
			return res.status(401).json({
				status: "error",
				message: "Unauthorized: Invalid Role",
			});
		}

		next();
	};
};

export { authenticate, autherize };
