"use client";

import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from "recharts";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
	score: {
		label: "Score",
	},
} satisfies ChartConfig;

export function IndividualEfficiency({
	name,
	efficiencyScore,
	feedback,
}: {
	name: string;
	efficiencyScore: number;
	feedback: string;
}) {
	const chartData = [{ name, efficiencyScore }];

	return (
		<Card className='flex flex-col w-full'>
			<CardHeader className='items-center pb-0'>
				<CardTitle>Your Efficiency Score</CardTitle>
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square '
				>
					<RadialBarChart
						data={chartData}
						startAngle={0}
						endAngle={250}
						innerRadius={80}
						outerRadius={110}
					>
						<PolarGrid
							gridType='circle'
							radialLines={false}
							stroke='none'
							className='first:fill-muted last:fill-background'
							polarRadius={[86, 74]}
						/>
						<RadialBar
							dataKey='efficiencyScore'
							background
							cornerRadius={10}
							fill='hsl(var(--chart-1))'
						/>
						<PolarRadiusAxis
							tick={false}
							tickLine={false}
							axisLine={false}
						>
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
													className='fill-foreground text-4xl font-bold'
												>
													{chartData[0].efficiencyScore.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className='fill-muted-foreground'
												>
													Score
												</tspan>
											</text>
										);
									}
								}}
							/>
						</PolarRadiusAxis>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col gap-2 text-lg text-wrap'>
				<span className='text-xl font-medium'>Feedback</span>
				{feedback}
			</CardFooter>
		</Card>
	);
}
