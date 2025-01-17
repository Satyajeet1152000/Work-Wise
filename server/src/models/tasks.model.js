import mongoose from "mongoose";

const attachmentSchema = new mongoose.Schema({
	filename: String,
	url: String,
	type: String,
	uploadDate: {
		type: Date,
		default: Date.now,
	},
});

const commentSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
});

const taskSchema = new mongoose.Schema(
	{
		employeeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			enum: ["BAU", "AdHoc", "Project"],
			required: true,
		},
		priority: {
			type: String,
			enum: ["Low", "Medium", "High", "Urgent"],
			required: true,
		},
		status: {
			type: String,
			enum: ["Pending", "InProgress", "Completed", "Overdue"],
			default: "Pending",
		},
		timeEstimated: Number, // in minutes
		timeSpent: Number, // in minutes
		startDate: Date,
		completionDate: Date,
		deadline: Date,
		reference: {
			type: {
				type: String,
				enum: ["manager", "colleague", "client"],
			},
			refererId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		},
		attachments: [attachmentSchema],
		dependencies: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Task",
			},
		],
		tags: [String],
		comments: [commentSchema],
		metrics: {
			efficiencyScore: Number,
			impactScore: Number,
			qualityScore: Number,
		},
	},
	{
		timestamps: true,
	}
);

// Add indexes
taskSchema.index({ employeeId: 1, status: 1 });
taskSchema.index({ deadline: 1 });
taskSchema.index({ category: 1 });
taskSchema.index({ "reference.refererId": 1 });

export default mongoose.model("Task", taskSchema);
