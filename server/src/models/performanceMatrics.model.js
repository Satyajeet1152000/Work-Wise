import mongoose from "mongoose";

const performanceMetricSchema = new mongoose.Schema(
	{
		employeeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		period: {
			start: { type: Date, required: true },
			end: { type: Date, required: true },
		},
		metrics: {
			tasksCompleted: Number,
			totalTimeSpent: Number,
			efficiencyScore: Number,
			productivityScore: Number,
			taskBreakdown: {
				BAU: Number,
				AdHoc: Number,
				Project: Number,
			},
			priorityBreakdown: {
				Low: Number,
				Medium: Number,
				High: Number,
				Urgent: Number,
			},
		},
		sentiment: {
			score: Number,
			factors: [String],
		},
		predictions: {
			burnoutRisk: Number,
			performanceTrend: String,
		},
		achievements: [
			{
				type: String,
				description: String,
				awardedAt: {
					type: Date,
					default: Date.now,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

// Add indexes
performanceMetricSchema.index({
	employeeId: 1,
	"period.start": 1,
	"period.end": 1,
});
performanceMetricSchema.index({ "metrics.efficiencyScore": 1 });

export default mongoose.model("PerformanceMetric", performanceMetricSchema);
