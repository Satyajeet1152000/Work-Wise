"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig: ChartConfig = {
	futureEfficiencyScore: {
		label: "Future Efficiency Score",
		color: ``,
	},
};

const getRiskColor = (riskLevel: string) => {
	switch (riskLevel) {
		case "Low":
			return "#22c55e"; // Low risk - green
		case "Medium":
			return "#f59e0b"; // Medium risk - amber
		case "High":
			return "#ef4444"; // High risk - red
		default:
			return "hsl(var(--chart-1))";
	}
};

export function PerformancePrediction({ data }: { data: any[] }) {
	return (
		<Card className='flex flex-col flex-grow relative'>
			<CardHeader>
				<CardTitle>Performance Prediction</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='absolute top-14 right-14 '>
					<div className={`flex gap-2 items-center`}>
						<div
							style={{ backgroundColor: getRiskColor("Low") }}
							className='w-4 h-4 rounded-sm'
						></div>
						Low Risk
					</div>
					<div className={`flex gap-2 items-center`}>
						<div
							style={{ backgroundColor: getRiskColor("Medium") }}
							className='w-4 h-4 rounded-sm'
						></div>
						Medium Risk
					</div>
					<div className={`flex gap-2 items-center`}>
						<div
							style={{ backgroundColor: getRiskColor("High") }}
							className='w-4 h-4 rounded-sm'
						></div>
						High Risk
					</div>
				</div>
				<ChartContainer config={chartConfig}>
					<BarChart
						data={data}
						margin={{
							top: 20,
							right: 20,
							left: 20,
							bottom: 20,
						}}
					>
						<CartesianGrid vertical={false} strokeDasharray='3 3' />
						<XAxis
							dataKey='name'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>

						<Bar
							dataKey='futureEfficiencyScore'
							radius={5}
							shape={(props: any) => {
								const { x, y, width, height, payload } = props;
								return (
									<rect
										x={x}
										y={y}
										width={width}
										height={height}
										fill={getRiskColor(payload.riskLevel)}
										rx={5}
										ry={5}
									/>
								);
							}}
						>
							<LabelList
								dataKey='futureEfficiencyScore'
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
