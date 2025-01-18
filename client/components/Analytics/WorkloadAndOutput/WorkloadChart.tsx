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

const WorloadChart = () => {
	const chartData = [
		{
			employeeName: "Alice",
			workload: {
				BAU: 5,
				AdHoc: 3,
				Project: 2,
			},
			totalTasks: 10,
		},
		{
			employeeName: "Bob",
			workload: {
				BAU: 4,
				AdHoc: 5,
				Project: 1,
			},
			totalTasks: 10,
		},
		{
			employeeName: "Charlie",
			workload: {
				BAU: 7,
				AdHoc: 2,
				Project: 6,
			},
			totalTasks: 15,
		},
	];

	const chartConfig = {
		BAU: {
			label: "BAU",
			color: "hsl(var(--chart-1))",
		},
		AdHoc: {
			label: "AdHoc",
			color: "hsl(var(--chart-5))",
		},
		Project: {
			label: "Project",
			color: "hsl(var(--chart-2))",
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
				<CardTitle>Workload</CardTitle>
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
							dataKey='workload.BAU'
							stackId='a'
							fill='var(--color-BAU)'
							radius={[0, 0, 4, 4]}
						/>
						<Bar
							dataKey='workload.AdHoc'
							stackId='a'
							fill='var(--color-AdHoc)'
							radius={[4, 4, 0, 0]}
						/>
						<Bar
							dataKey='workload.Project'
							stackId='a'
							fill='var(--color-Project)'
							radius={[4, 4, 0, 0]}
						>
							<LabelList
								position='top'
								dataKey='totalTasks'
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

export default WorloadChart;
