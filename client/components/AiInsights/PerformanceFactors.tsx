"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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

interface PerformanceFactors {
	timeEfficiency: number;
	priorityCompletion: number;
	dependencyResolution: number;
	taskCompletionRate: number;
	overallFeedback: number;
}

export function PerformanceFactors({
	employeeData,
	averageData,
}: {
	employeeData: PerformanceFactors;
	averageData: PerformanceFactors;
}) {
	const Factors: (keyof PerformanceFactors)[] = [
		"timeEfficiency",
		"priorityCompletion",
		"dependencyResolution",
		"taskCompletionRate",
		"overallFeedback",
	];
	const CapitalFactor = [
		"Time Efficiency",
		"Priority Completion",
		"Dependency Resolution",
		"Task Completion Rate",
		"Overall Feedback",
	];

	const chartData = Factors.map((factor, i) => {
		return {
			factor: CapitalFactor[i],
			your: employeeData[factor],
			average: averageData[factor],
		};
	});

	const chartConfig = {
		average: {
			label: "Average",
			color: "hsl(var(--chart-1))",
		},
		your: {
			label: "Your",
			color: "hsl(var(--chart-2))",
		},
	};
	return (
		<Card className='flex flex-col w-full'>
			<CardHeader className='items-center pb-4'>
				<CardTitle>Performance Factors</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square'
				>
					<RadarChart
						data={chartData}
						margin={{
							top: -40,
							bottom: 10,
						}}
					>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='line' />}
						/>
						<PolarAngleAxis
							dataKey='factor'
							tick={{
								fontSize: 15,
								textAnchor: "middle",
							}}
						/>
						<PolarGrid />
						<Radar
							dataKey='average'
							fill='var(--color-average)'
							fillOpacity={0.6}
						/>
						<Radar
							dataKey='your'
							fill='var(--color-your)'
							fillOpacity={0.6}
						/>
						<ChartLegend
							className=''
							content={<ChartLegendContent />}
						/>
					</RadarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
