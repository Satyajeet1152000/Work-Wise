import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		type: {
			type: String,
			enum: ["alert", "reminder", "achievement", "mention"],
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		priority: {
			type: String,
			enum: ["low", "medium", "high"],
			default: "low",
		},
		status: {
			type: String,
			enum: ["unread", "read", "archived"],
			default: "unread",
		},
		readAt: Date,
		relatedTo: {
			type: {
				type: String,
				enum: ["task", "challenge", "performance"],
			},
			id: mongoose.Schema.Types.ObjectId,
		},
		action: {
			type: String,
			url: String,
		},
	},
	{
		timestamps: true,
	}
);

// Add indexes
notificationSchema.index({ userId: 1, status: 1 });
notificationSchema.index({ createdAt: 1 });

export default mongoose.model("Notification", notificationSchema);
