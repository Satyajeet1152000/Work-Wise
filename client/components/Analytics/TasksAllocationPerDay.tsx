"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
	{ day: "1", BAU: 186, AdHoc: 80, Project: 123 },
	{ day: "2", BAU: 305, AdHoc: 200, Project: 145 },
	{ day: "3", BAU: 237, AdHoc: 120, Project: 167 },
	{ day: "4", BAU: 73, AdHoc: 190, Project: 96 },
	{ day: "5", BAU: 209, AdHoc: 130, Project: 234 },
	{ day: "6", BAU: 214, AdHoc: 140, Project: 145 },
	{ day: "7", BAU: 214, AdHoc: 140, Project: 134 },
];

const chartConfig = {
	BAU: {
		label: "BAU",
		color: "hsl(var(--chart-1))",
	},
	AdHoc: {
		label: "AdHoc",
		color: "hsl(var(--chart-2))",
	},
	Project: {
		label: "Project",
		color: "hsl(var(--chart-3))",
	},
} satisfies ChartConfig;

export function TasksAllocationPerDay() {
	return (
		<Card className='flex flex-col flex-grow'>
			<CardHeader>
				<CardTitle>Tasks Allocation / Day</CardTitle>
				<CardDescription>Last 7 Days</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='day'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							content={<ChartTooltipContent hideLabel />}
						/>
						<ChartLegend content={<ChartLegendContent />} />
						<Bar
							dataKey='BAU'
							stackId='a'
							fill='var(--color-BAU)'
							radius={[0, 0, 4, 4]}
						/>
						<Bar
							dataKey='AdHoc'
							stackId='a'
							fill='var(--color-AdHoc)'
							radius={[4, 4, 0, 0]}
						/>
						<Bar
							dataKey='Project'
							stackId='a'
							fill='var(--color-Project)'
							radius={[4, 4, 0, 0]}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
