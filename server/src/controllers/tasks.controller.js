import Task from "../models/tasks.model.js";

export const getTasks = async (req, res, next) => {
	try {
		const { id } = req.params;

		if (!id) {
			return res
				.status(400)
				.json({ success: false, error: "Task ID is required" });
		}

		const Tasks = await Task.findById(id);

		if (!Tasks) {
			return res
				.status(404)
				.json({ success: false, error: "Task not found" });
		}

		res.status(200).json({ success: true, data: tasks });
	} catch (error) {
		next(error);
	}
};
