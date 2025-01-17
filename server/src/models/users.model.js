import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["employee", "manager", "admin"],
			required: true,
		},
		department: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			required: true,
		},
		dateJoined: {
			type: Date,
			default: Date.now,
		},
		manager: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		lastLogin: Date,
		preferences: {
			notifications: {
				email: { type: Boolean, default: true },
				inApp: { type: Boolean, default: true },
				deadlineReminders: { type: Boolean, default: true },
			},
			dashboardLayout: { type: mongoose.Schema.Types.Mixed },
		},
	},
	{
		timestamps: true,
	}
);

userSchema.index({ email: 1 });
userSchema.index({ department: 1 });
userSchema.index({ manager: 1 });

const User = mongoose.model("User", userSchema);

export default User;
