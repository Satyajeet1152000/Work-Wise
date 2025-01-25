"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
	views: {
		label: "Score",
	},
	efficiencyScore: {
		label: "Efficiency Score",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

interface UserEfficiencyData {
	name: string;
	efficiencyScore: number;
}

export function AllUsersEfficiency({ data }: { data: UserEfficiencyData[] }) {
	// console.log(data);
	const chartData = data;

	return (
		<Card>
			<CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
				<div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6 text-2xl'>
					<CardTitle>Employees Efficiency Score</CardTitle>
				</div>
			</CardHeader>
			<CardContent className='px-2 sm:p-6'>
				<ChartContainer
					config={chartConfig}
					className='aspect-auto h-[250px] w-full'
				>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
							top: 10,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='name'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => value.split(" ")[0]}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className='w-[150px]'
									nameKey='efficiencyScore'
								/>
							}
						/>
						<Bar
							dataKey='efficiencyScore'
							fill={`hsl(var(--chart-1))`}
						>
							<LabelList
								dataKey='efficiencyScore'
								position='top'
								offset={10}
								className='fill-foreground'
								fontSize={10}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
