"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

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
	{ day: "Sunday", value: 186 },
	{ day: "Monday", value: 256 },
	{ day: "Tuesday", value: 16 },
	{ day: "Wednesday", value: 126 },
	{ day: "Thursday", value: 134 },
	{ day: "Friday", value: 86 },
	{ day: "Saturday", value: 178 },
];

const chartConfig = {
	value: {
		label: "Productivity",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function ProductivityBar() {
	return (
		<Card className='flex flex-col flex-grow'>
			<CardHeader>
				<CardTitle>Productivity</CardTitle>
				<CardDescription>2 June - 7 June</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							top: 20,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='day'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar
							dataKey='value'
							fill='var(--color-value)'
							radius={3}
						>
							<LabelList
								position='top'
								offset={10}
								className='fill-foreground'
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
