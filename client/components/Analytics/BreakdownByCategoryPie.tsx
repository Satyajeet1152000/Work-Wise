"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

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
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ category: "BAU", count: 275, fill: "var(--color-chrome, #4285F4)" },
	{ category: "AdHoc", count: 187, fill: "var(--color-safari, #F4B400)" },
	{ category: "Project", count: 187, fill: "var(--color-firefox, #DB4437)" },
];

const chartConfig = {
	BAU: {
		label: "BAU",
		color: "hsl(var(--chart-1, 217, 89%, 61%))",
	},
	AdHoc: {
		label: "AdHoc",
		color: "hsl(var(--chart-2, 44, 89%, 61%))",
	},
	Project: {
		label: "Project",
		color: "hsl(var(--chart-3, 0, 69%, 61%))",
	},
};

export function BreakdownByCategoryPie() {
	return (
		<Card className='flex flex-col flex-grow '>
			<CardHeader className='items-center pb-0'>
				<CardTitle>Tasks Breakdown By Category</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background'
				>
					<PieChart>
						<ChartTooltip
							content={
								<ChartTooltipContent
									nameKey='category'
									hideLabel
								/>
							}
						/>
						<Pie data={chartData} dataKey='count'>
							<LabelList
								dataKey='category'
								className='fill-background'
								stroke='none'
								fontSize={12}
								formatter={(value: keyof typeof chartConfig) =>
									chartConfig[value]?.label
								}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
