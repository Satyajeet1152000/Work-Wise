export const errorHandler = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	const stack = err.stack;

	console.error({
		message,
		statusCode,
		stack,
		method: req.method,
		url: req.url,
	});

	if (err) {
		if (process.env.NODE_ENV === "development") {
			return res.status(statusCode).json({
				status: "error",
				message,
				stack,
			});
		}
		return res.status(statusCode).json({
			status: "error",
			message,
		});
	}

	next();
};
