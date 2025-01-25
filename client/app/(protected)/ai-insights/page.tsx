import { AllUsersEfficiency } from "@/components/AiInsights/AllUsersEfficiency";
import { IndividualEfficiency } from "@/components/AiInsights/IndividualEfficiency";
import { PerformanceFactors } from "@/components/AiInsights/PerformanceFactors";
import { PerformancePrediction } from "@/components/AiInsights/PerformancePrediction";
import React from "react";

const data = {
	users: [
		{
			employeeId: "emp001",
			name: "Kevin Thompson",
			efficiencyScore: 87.6,
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
			name: "Mary Smith",
			efficiencyScore: 90.5,
			feedback:
				"You are struggling with tasks that have dependencies. Focus on resolving dependencies efficiently by coordinating with relevant teams.",
			tasksCompleted: 7,
			performanceFactors: {
				timeEfficiency: 65,
				priorityCompletion: 90,
				dependencyResolution: 80,
				taskCompletionRate: 75,
				overallFeedback: 80,
			},
		},
		{
			employeeId: "emp003",
			name: "Dorthy Perez",
			efficiencyScore: 82.45,
			feedback:
				"You are struggling with tasks that have dependencies. Focus on resolving dependencies efficiently by coordinating with relevant teams.",
			tasksCompleted: 6,
			performanceFactors: {
				timeEfficiency: 50,
				priorityCompletion: 35,
				dependencyResolution: 65,
				taskCompletionRate: 70,
				overallFeedback: 65,
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

interface PredictionData {
	employeeId: string;
	name: string;
	futureEfficiencyScore: number;
	riskLevel: "Low" | "Medium" | "High";
}
const performancePredictionData: PredictionData[] = [
	{
		employeeId: "emp019",
		name: "Kevin Thompson",
		futureEfficiencyScore: 70.9,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp043",
		name: "Sophia Johnson",
		futureEfficiencyScore: 80.1,
		riskLevel: "Low",
	},
	{
		employeeId: "emp022",
		name: "Dorothy Perez",
		futureEfficiencyScore: 69.5,
		riskLevel: "High",
	},
	{
		employeeId: "emp010",
		name: "Elizabeth Wilson",
		futureEfficiencyScore: 65.7,
		riskLevel: "High",
	},
	{
		employeeId: "emp037",
		name: "Richard Perez",
		futureEfficiencyScore: 65.4,
		riskLevel: "High",
	},
	{
		employeeId: "emp001",
		name: "Alice Johnson",
		futureEfficiencyScore: 74.7,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp045",
		name: "Olivia Clark",
		futureEfficiencyScore: 79.5,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp003",
		name: "Mary Smith",
		futureEfficiencyScore: 62.1,
		riskLevel: "High",
	},
	{
		employeeId: "emp017",
		name: "Brian Harris",
		futureEfficiencyScore: 66.4,
		riskLevel: "High",
	},
	{
		employeeId: "emp047",
		name: "Grace Allen",
		futureEfficiencyScore: 88.0,
		riskLevel: "Low",
	},
	{
		employeeId: "emp020",
		name: "Betty Garcia",
		futureEfficiencyScore: 54.3,
		riskLevel: "High",
	},
	{
		employeeId: "emp024",
		name: "Sandra Lewis",
		futureEfficiencyScore: 79.0,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp026",
		name: "Helen Young",
		futureEfficiencyScore: 74.1,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp042",
		name: "Joshua White",
		futureEfficiencyScore: 66.8,
		riskLevel: "High",
	},
	{
		employeeId: "emp029",
		name: "Paul Adams",
		futureEfficiencyScore: 67.9,
		riskLevel: "High",
	},
	{
		employeeId: "emp018",
		name: "Nancy Martin",
		futureEfficiencyScore: 82.0,
		riskLevel: "Low",
	},
	{
		employeeId: "emp014",
		name: "Sarah Thomas",
		futureEfficiencyScore: 56.3,
		riskLevel: "High",
	},
	{
		employeeId: "emp039",
		name: "Charles Robinson",
		futureEfficiencyScore: 84.3,
		riskLevel: "Low",
	},
	{
		employeeId: "emp021",
		name: "Donald Lee",
		futureEfficiencyScore: 77.8,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp023",
		name: "Jerry Clark",
		futureEfficiencyScore: 85.1,
		riskLevel: "Low",
	},
	{
		employeeId: "emp011",
		name: "Christopher Moore",
		futureEfficiencyScore: 77.1,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp050",
		name: "Jackie Carter",
		futureEfficiencyScore: 75.6,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp038",
		name: "Lisa Young",
		futureEfficiencyScore: 78.7,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp028",
		name: "Donna Scott",
		futureEfficiencyScore: 90.6,
		riskLevel: "Low",
	},
	{
		employeeId: "emp002",
		name: "John Doe",
		futureEfficiencyScore: 85.3,
		riskLevel: "Low",
	},
	{
		employeeId: "emp030",
		name: "Martha Nelson",
		futureEfficiencyScore: 73.3,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp004",
		name: "James Williams",
		futureEfficiencyScore: 78.5,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp046",
		name: "Ethan Harris",
		futureEfficiencyScore: 62.9,
		riskLevel: "High",
	},
	{
		employeeId: "emp015",
		name: "Daniel Jackson",
		futureEfficiencyScore: 89.2,
		riskLevel: "Low",
	},
	{
		employeeId: "emp027",
		name: "Gary King",
		futureEfficiencyScore: 64.7,
		riskLevel: "High",
	},
	{
		employeeId: "emp035",
		name: "Jack Turner",
		futureEfficiencyScore: 92.5,
		riskLevel: "Low",
	},
	{
		employeeId: "emp048",
		name: "Samuel Walker",
		futureEfficiencyScore: 80.2,
		riskLevel: "Low",
	},
	{
		employeeId: "emp016",
		name: "Karen White",
		futureEfficiencyScore: 74.6,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp008",
		name: "Robert Martinez",
		futureEfficiencyScore: 90.4,
		riskLevel: "Low",
	},
	{
		employeeId: "emp009",
		name: "Michael Rodriguez",
		futureEfficiencyScore: 72.3,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp032",
		name: "Ruth Mitchell",
		futureEfficiencyScore: 71.1,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp013",
		name: "Thomas Anderson",
		futureEfficiencyScore: 70.4,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp033",
		name: "Stephen Perez",
		futureEfficiencyScore: 63.2,
		riskLevel: "High",
	},
	{
		employeeId: "emp040",
		name: "Barbara Davis",
		futureEfficiencyScore: 69.4,
		riskLevel: "High",
	},
	{
		employeeId: "emp025",
		name: "Steven Walker",
		futureEfficiencyScore: 88.3,
		riskLevel: "Low",
	},
	{
		employeeId: "emp005",
		name: "Patricia Brown",
		futureEfficiencyScore: 69.8,
		riskLevel: "High",
	},
	{
		employeeId: "emp012",
		name: "Jessica Taylor",
		futureEfficiencyScore: 81.9,
		riskLevel: "Low",
	},
	{
		employeeId: "emp031",
		name: "Andrew Carter",
		futureEfficiencyScore: 87.4,
		riskLevel: "Low",
	},
	{
		employeeId: "emp036",
		name: "Kimberly Morris",
		futureEfficiencyScore: 70.0,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp044",
		name: "Jacob Moore",
		futureEfficiencyScore: 71.3,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp007",
		name: "Linda Garcia",
		futureEfficiencyScore: 58.2,
		riskLevel: "High",
	},
	{
		employeeId: "emp006",
		name: "David Jones",
		futureEfficiencyScore: 83.6,
		riskLevel: "Low",
	},
	{
		employeeId: "emp049",
		name: "Chloe Martin",
		futureEfficiencyScore: 67.3,
		riskLevel: "High",
	},
	{
		employeeId: "emp034",
		name: "Carol Evans",
		futureEfficiencyScore: 76.8,
		riskLevel: "Medium",
	},
	{
		employeeId: "emp041",
		name: "Matthew Lewis",
		futureEfficiencyScore: 72.6,
		riskLevel: "Medium",
	},
];

function calculateAverage(performanceFactors: {
	[key: string]: number;
}): number {
	const total = Object.values(performanceFactors).reduce(
		(sum: number, value: number) => sum + value,
		0
	);
	return total / Object.values(performanceFactors).length;
}

const PerformanceFactorsUsers = data.users.sort((a, b) => {
	const avgA = calculateAverage(a.performanceFactors);
	const avgB = calculateAverage(b.performanceFactors);
	return avgB - avgA;
});

const AiInsightsPage = () => {
	const allUserEfficiencyScore = [
		{ name: "Eva Martinez", efficiencyScore: 79 },
		{ name: "Nathan Adams", efficiencyScore: 60 },
		{ name: "Olivia Robinson", efficiencyScore: 54 },
		{ name: "Maxwell Perez", efficiencyScore: 63 },
		{ name: "Aidan Lee", efficiencyScore: 68 },
		{ name: "Peyton Thomas", efficiencyScore: 91 },
		{ name: "Julia Carter", efficiencyScore: 52 },
		{ name: "Wyatt Walker", efficiencyScore: 81 },
		{ name: "Sophie Moore", efficiencyScore: 73 },
		{ name: "Jackson Harris", efficiencyScore: 77 },
		{ name: "Lucas Green", efficiencyScore: 69 },
		{ name: "Cora Hill", efficiencyScore: 84 },
		{ name: "Declan Wilson", efficiencyScore: 65 },
		{ name: "Amos Taylor", efficiencyScore: 56 },
		{ name: "Layla Allen", efficiencyScore: 70 },
		{ name: "Zane King", efficiencyScore: 64 },
		{ name: "Nora Scott", efficiencyScore: 80 },
		{ name: "Theo Moore", efficiencyScore: 78 },
		{ name: "Kaitlyn Brown", efficiencyScore: 57 },
		{ name: "Elise Young", efficiencyScore: 60 },
		{ name: "John Doe", efficiencyScore: 71 },
		{ name: "Jane Smith", efficiencyScore: 92 },
		{ name: "Alex Johnson", efficiencyScore: 63 },
		{ name: "Chris Lee", efficiencyScore: 80 },
		{ name: "Taylor Brown", efficiencyScore: 55 },
		{ name: "Jordan White", efficiencyScore: 46 },
		{ name: "Casey Clark", efficiencyScore: 88 },
		{ name: "Morgan Hall", efficiencyScore: 59 },
		{ name: "Drew King", efficiencyScore: 93 },
		{ name: "Avery Scott", efficiencyScore: 60 },
		{ name: "Sam Green", efficiencyScore: 75 },
		{ name: "Brittany Adams", efficiencyScore: 81 },
		{ name: "Michael Carter", efficiencyScore: 55 },
		{ name: "Kimberly Lewis", efficiencyScore: 64 },
		{ name: "Ryan Walker", efficiencyScore: 77 },
		{ name: "Laura Hill", efficiencyScore: 82 },
		{ name: "David Robinson", efficiencyScore: 68 },
		{ name: "Steven Allen", efficiencyScore: 54 },
		{ name: "Sophia Young", efficiencyScore: 91 },
		{ name: "Oliver Martinez", efficiencyScore: 38 },
		{ name: "Emma Moore", efficiencyScore: 65 },
		{ name: "Liam Perez", efficiencyScore: 81 },
		{ name: "Mason Wilson", efficiencyScore: 94 },
		{ name: "Isabella Harris", efficiencyScore: 40 },
		{ name: "James Taylor", efficiencyScore: 86 },
		{ name: "Amelia Thomas", efficiencyScore: 72 },
		{ name: "Benjamin Clark", efficiencyScore: 73 },
		{ name: "Chloe Rodriguez", efficiencyScore: 49 },
		{ name: "Jackson Walker", efficiencyScore: 79 },
		{ name: "Ethan Lewis", efficiencyScore: 55 },
		{ name: "Charlotte Hall", efficiencyScore: 80 },
		{ name: "Lily Young", efficiencyScore: 91 },
		{ name: "Elijah Adams", efficiencyScore: 47 },
		{ name: "Zoe Nelson", efficiencyScore: 60 },
		{ name: "Henry Scott", efficiencyScore: 66 },
		{ name: "Scarlett Green", efficiencyScore: 85 },
		{ name: "Jacob Robinson", efficiencyScore: 77 },
		{ name: "Madeline Harris", efficiencyScore: 78 },
		{ name: "Aiden Carter", efficiencyScore: 62 },
		{ name: "Victoria Martinez", efficiencyScore: 56 },
		{ name: "Lucas Perez", efficiencyScore: 83 },
		{ name: "Eva King", efficiencyScore: 87 },
		{ name: "Cameron Wilson", efficiencyScore: 90 },
		{ name: "Mila Moore", efficiencyScore: 45 },
		{ name: "Matthew Allen", efficiencyScore: 69 },
		{ name: "Sofia Thomas", efficiencyScore: 92 },
		{ name: "Oliver Lee", efficiencyScore: 51 },
		{ name: "Evelyn Walker", efficiencyScore: 67 },
		{ name: "Wyatt Taylor", efficiencyScore: 84 },
		{ name: "Megan Clark", efficiencyScore: 79 },
		{ name: "Carter Harris", efficiencyScore: 65 },
		{ name: "Lillian Young", efficiencyScore: 74 },
		{ name: "Henry Martinez", efficiencyScore: 81 },
		{ name: "Santiago Wilson", efficiencyScore: 56 },
		{ name: "Alice Perez", efficiencyScore: 62 },
		{ name: "John King", efficiencyScore: 68 },
	];
	// const allUserEfficiencyScore = data.users.map((user) => {
	// 	return {
	// 		name: user.name,
	// 		efficiencyScore: user.efficiencyScore,
	// 	};
	// });

	// console.log(PerformanceFactorsUsers);
	return (
		<div className='space-y-12'>
			<div className='space-y-12'>
				<h1 className='text-4xl font-semibold'>
					AI Powered Productivity Insights
				</h1>
				<AllUsersEfficiency data={allUserEfficiencyScore} />
			</div>

			<div className='space-y-4'>
				<h1 className='text-2xl font-semibold'>
					Highest Efficiency Score - Top 3
				</h1>
				<div className='grid grid-cols-3 gap-5'>
					{data.users
						.sort((a, b) => b.efficiencyScore - a.efficiencyScore)
						.map((user) => (
							<div key={user.employeeId}>
								<IndividualEfficiency
									name={user.name}
									efficiencyScore={user.efficiencyScore}
									feedback={user.feedback}
								/>
							</div>
						))}
				</div>
			</div>

			<div className='space-y-4  h-fit'>
				<h1 className='text-2xl font-semibold'>
					Highest Performance Factors - Top 3
				</h1>
				<div className='grid grid-cols-3 gap-5'>
					{PerformanceFactorsUsers.map((user) => (
						<div key={user.employeeId}>
							<PerformanceFactors
								name={user.name}
								employeeData={user.performanceFactors}
								averageData={data.avgPerformanceFactors}
							/>
						</div>
					))}
				</div>
			</div>
			<div className='space-y-4  h-10'>
				<h1 className='text-2xl font-semibold'>
					Performance Prediction
				</h1>
				<div className='h-[500px]'>
					<PerformancePrediction data={performancePredictionData} />
				</div>
			</div>
		</div>
	);
};

export default AiInsightsPage;
