"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
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
import { json } from "stream/consumers";

const chartConfig = {
	count: {
		label: "Total",
	},
	Pending: {
		label: "Pending",
	},
	InProgress: {
		label: "In Progress",
	},
	Completed: {
		label: "Completed",
	},
	Overdue: {
		label: "Overdue",
	},
};

interface DataType {
	teamId: string;
	teamName: string;
	tasks: {
		Pending: number;
		InProgress: number;
		Completed: number;
		Overdue: number;
	};
}

export function DonutChart({ data, type }: { data: DataType; type: string }) {
	const totalTasks =
		data.tasks.Pending +
		data.tasks.InProgress +
		data.tasks.Completed +
		data.tasks.Overdue;
	const productivity = ((data.tasks.Completed / totalTasks) * 100).toFixed(2);

	const taskStatuses: (keyof DataType["tasks"])[] = [
		"Pending",
		"InProgress",
		"Completed",
		"Overdue",
	];
	const colors = [
		"hsl(var(--chart-1))",
		"hsl(var(--chart-2))",
		"hsl(var(--chart-3))",
		"hsl(var(--chart-4))",
	];

	const chartData = taskStatuses.map((status, index) => ({
		task: status,
		count: data.tasks[status],
		fill: colors[index],
	}));

	return (
		<Card className='flex flex-col flex-grow '>
			<CardHeader className='items-center pb-0'>
				<CardTitle>{type}</CardTitle>
				{/* <CardDescription>January - June 2024</CardDescription> */}
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square max-h-[250px]'
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData}
							dataKey='count'
							nameKey='task'
							innerRadius={60}
							strokeWidth={5}
						>
							{chartData.map((entry) => (
								<Pie
									data={chartData}
									dataKey='count'
									nameKey='task'
									innerRadius={60}
									strokeWidth={5}
									key={entry.task}
								/>
							))}
							<Label
								content={({ viewBox }) => {
									if (
										viewBox &&
										"cx" in viewBox &&
										"cy" in viewBox
									) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor='middle'
												dominantBaseline='middle'
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className='fill-foreground text-2xl font-bold'
												>
													{productivity}%
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className='fill-muted-foreground'
												>
													Productivity
												</tspan>
											</text>
										);
									}
								}}
							/>
						</Pie>
						<ChartLegend
							content={<ChartLegendContent nameKey='task' />}
							className='-translate-y-1/2 text-nowrap'
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
