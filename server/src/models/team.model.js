import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	targetDate: Date,
	status: String,
	progress: {
		type: Number,
		min: 0,
		max: 100,
	},
});

const challengeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	startDate: Date,
	endDate: Date,
	criteria: mongoose.Schema.Types.Mixed,
	participants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
	status: String,
});

const teamSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: String,
		managerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		members: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		goals: [goalSchema],
		challenges: [challengeSchema],
	},
	{
		timestamps: true,
	}
);

// Add indexes
teamSchema.index({ managerId: 1 });
teamSchema.index({ members: 1 });

export default mongoose.model("Team", teamSchema);
