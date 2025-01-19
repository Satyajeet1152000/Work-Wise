import { AllUsersEfficiency } from "@/components/AiInsights/AllUsersEfficiency";
import { IndividualEfficiency } from "@/components/AiInsights/IndividualEfficiency";
import { PerformanceFactors } from "@/components/AiInsights/PerformanceFactors";
import { PerformancePrediction } from "@/components/AiInsights/PerformancePrediction";
import React from "react";
const data = {
	users: [
		{
			employeeId: "emp001",
			name: "Employee 1",
			efficiencyScore: 69.0,
			feedback:
				"You missed a high-priority task. Ensure that priority tasks are completed first.",
			tasksCompleted: 5,
			performanceFactors: {
				timeEfficiency: 75,
				priorityCompletion: 85,
				dependencyResolution: 60,
				taskCompletionRate: 80,
				overallFeedback: 70,
			},
		},
		{
			employeeId: "emp002",
			name: "Employee 2",
			efficiencyScore: 90.5,
			feedback:
				"You are struggling with tasks that have dependencies. Focus on resolving dependencies efficiently by coordinating with relevant teams.",
			tasksCompleted: 7,
			performanceFactors: {
				timeEfficiency: 65,
				priorityCompletion: 90,
				dependencyResolution: 70,
				taskCompletionRate: 75,
				overallFeedback: 80,
			},
		},
		{
			employeeId: "emp003",
			name: "Employee 3",
			efficiencyScore: 62.04,
			feedback:
				"You are struggling with tasks that have dependencies. Focus on resolving dependencies efficiently by coordinating with relevant teams.",
			tasksCompleted: 6,
			performanceFactors: {
				timeEfficiency: 80,
				priorityCompletion: 75,
				dependencyResolution: 85,
				taskCompletionRate: 90,
				overallFeedback: 85,
			},
		},
	],
	averageEmployeeEfficiency: 76.2,
	avgPerformanceFactors: {
		timeEfficiency: 80,
		priorityCompletion: 75,
		dependencyResolution: 85,
		taskCompletionRate: 90,
		overallFeedback: 85,
	},
};

const performancePredictionData = [
	{
		employeeId: "emp001",
		name: "Alice Johnson",
		futureEfficiencyScore: 74.7,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp002",
		name: "Bob Smith",
		futureEfficiencyScore: 80.2,
		riskLevel: "Low",
	},
	{
		employeeId: "emp003",
		name: "Charlie Lee",
		futureEfficiencyScore: 35.5,
		riskLevel: "High",
	},
	{
		employeeId: "emp003",
		name: "Charlie Lee",
		futureEfficiencyScore: 35.5,
		riskLevel: "High",
	},
	{
		employeeId: "emp003",
		name: "Charlie Lee",
		futureEfficiencyScore: 35.5,
		riskLevel: "Low",
	},
];

const AiInsightsPage = () => {
	const allUserEfficiencyScore = data.users.map((user) => {
		return {
			name: user.name,
			efficiencyScore: user.efficiencyScore,
		};
	});

	return (
		<div>
			<h1 className='text-4xl font-semibold'>
				AI Powered Productivity Insights
			</h1>

			<div className=''>
				<AllUsersEfficiency data={allUserEfficiencyScore} />
				<div className='flex '>
					<IndividualEfficiency
						name={data.users[0].name}
						efficiencyScore={data.users[0].efficiencyScore}
						feedback={data.users[0].feedback}
					/>
					<PerformanceFactors
						employeeData={data.users[0].performanceFactors}
						averageData={data.avgPerformanceFactors}
					/>
				</div>
			</div>
			<div>
				<h1 className='text-2xl font-semibold'>
					Performance Prediction
				</h1>
				<div>
					<PerformancePrediction data={performancePredictionData} />
				</div>
			</div>
		</div>
	);
};

export default AiInsightsPage;
