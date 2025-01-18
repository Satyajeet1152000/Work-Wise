"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../ui/card";
import {
	ChartContainer,
	ChartLegend,
	ChartTooltip,
	ChartTooltipContent,
} from "../../ui/chart";

const OutputChart = () => {
	const chartData = [
		{
			employeeName: "Alice",
			metrics: {
				tasksCompleted: 8,
				efficiencyScore: 85,
				productivityScore: 90,
				qualityScore: 88,
			},
		},
		{
			employeeName: "Bob",
			metrics: {
				tasksCompleted: 10,
				efficiencyScore: 75,
				productivityScore: 80,
				qualityScore: 70,
			},
		},
		{
			employeeName: "Charlie",
			metrics: {
				tasksCompleted: 12,
				efficiencyScore: 95,
				productivityScore: 88,
				qualityScore: 92,
			},
		},
	];

	const chartConfig = {
		tasksCompleted: {
			label: "Tasks Completed",
			color: "hsl(var(--chart-1))",
		},
		efficiencyScore: {
			label: "Efficiency Score",
			color: "hsl(var(--chart-5))",
		},
		productivityScore: {
			label: "Productivity Score",
			color: "hsl(var(--chart-2))",
		},
		qualityScore: {
			label: "Quality Score",
			color: "hsl(var(--chart-4))",
		},
	};
	const CustomChartLegendContent = () => {
		const chartConfigEntries = Object.entries(chartConfig);

		return (
			<div
				style={{
					display: "flex",
					gap: "10px",
					justifyContent: "center",
					padding: "5px",
				}}
			>
				{chartConfigEntries.map(([key, { label, color }]) => (
					<div
						key={key}
						style={{ display: "flex", alignItems: "center" }}
					>
						<div
							style={{
								width: "12px",
								height: "12px",
								backgroundColor: color,
								marginRight: "5px",
							}}
						></div>
						<span>{label}</span>
					</div>
				))}
			</div>
		);
	};

	return (
		<Card className='flex flex-col gap-5 w-full'>
			<CardHeader>
				<CardTitle>Output</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='employeeName'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							// tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							content={<ChartTooltipContent hideLabel />}
						/>
						<ChartLegend content={<CustomChartLegendContent />} />
						<Bar
							dataKey='metrics.tasksCompleted'
							stackId='a'
							fill='var(--color-tasksCompleted)'
							radius={[0, 0, 4, 4]}
						>
							<LabelList
								position='top'
								dataKey='metrics.tasksCompleted'
								offset={5}
								fillOpacity={1}
								className='z-50 fill-white '
							></LabelList>
						</Bar>
						<Bar
							dataKey='metrics.efficiencyScore'
							stackId='b'
							fill='var(--color-efficiencyScore)'
							radius={[4, 4, 0, 0]}
						>
							<LabelList
								position='top'
								dataKey='metrics.efficiencyScore'
								offset={5}
								fillOpacity={1}
								className='z-50 fill-white '
							></LabelList>
						</Bar>
						<Bar
							dataKey='metrics.productivityScore'
							stackId='c'
							fill='var(--color-productivityScore)'
							radius={[4, 4, 0, 0]}
						>
							<LabelList
								position='top'
								dataKey='metrics.productivityScore'
								offset={5}
								fillOpacity={1}
								className='z-50 fill-white '
							></LabelList>
						</Bar>
						<Bar
							dataKey='metrics.qualityScore'
							stackId='d'
							fill='var(--color-qualityScore)'
							radius={[4, 4, 0, 0]}
						>
							<LabelList
								position='top'
								dataKey='metrics.qualityScore'
								offset={5}
								fillOpacity={1}
								className='z-50 fill-white '
							></LabelList>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};

export default OutputChart;
