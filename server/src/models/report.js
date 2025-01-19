import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
	{
		type: {
			type: String,
			enum: ["weekly", "monthly", "custom"],
			required: true,
		},
		generatedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		period: {
			start: { type: Date, required: true },
			end: { type: Date, required: true },
		},
		scope: {
			type: {
				type: String,
				enum: ["individual", "team", "department"],
				required: true,
			},
			targetId: mongoose.Schema.Types.ObjectId,
		},
		metrics: mongoose.Schema.Types.Mixed,
		insights: [
			{
				category: String,
				description: String,
				importance: String,
			},
		],
		format: {
			type: String,
			enum: ["pdf", "excel", "json"],
			required: true,
		},
		url: String,
	},
	{
		timestamps: true,
	}
);

// Add indexes
reportSchema.index({ "scope.targetId": 1, type: 1 });
reportSchema.index({ generatedBy: 1 });
reportSchema.index({ "period.start": 1, "period.end": 1 });

const Report = mongoose.model("Report", reportSchema);

export default Report;
