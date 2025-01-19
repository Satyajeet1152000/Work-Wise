import Task from "../models/tasks.model.js";
import User from "../models/users.model.js";

export const getUserTasks = async (req, res, next) => {
	try {
		const { id } = req.params;

		if (!id) {
			return res
				.status(400)
				.json({ success: false, error: "User ID is required" });
		}

		const user = await User.findById(id);

		if (!user) {
			return res
				.status(404)
				.json({ success: false, error: "User not found" });
		}

		let tasks = await Task.find({ employeeId: id }).populate({
			path: "reference.refererId",
			select: "name",
		});

		const modifiedTasks = tasks.map((task) => {
			const taskObj = task.toObject();
			taskObj.reference = {
				...task.reference.refererId.toObject(),
				...taskObj.reference,
			};

			delete taskObj.reference.refererId;
			return taskObj;
		});

		res.status(200).json({ success: true, data: modifiedTasks });
	} catch (error) {
		next(error);
	}
};
