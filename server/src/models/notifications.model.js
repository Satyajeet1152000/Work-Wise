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
			enum: ["unread", "read"],
			default: "unread",
		},
		readAt: Date,
	},
	{
		timestamps: true,
	}
);

// Add indexes
notificationSchema.index({ userId: 1, status: 1 });
notificationSchema.index({ createdAt: 1 });

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
