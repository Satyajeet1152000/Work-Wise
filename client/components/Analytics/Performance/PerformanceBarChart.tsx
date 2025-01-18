import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
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

const barColors = [
	"hsl(var(--chart-1))",
	"hsl(var(--chart-2))",
	"hsl(var(--chart-3))",
	"hsl(var(--chart-4))",
	"hsl(var(--chart-5))",
];

interface TaskData {
	name: string;
	taskquality: number;
	totalassignedtasks: number;
	totalcompletedtask: number;
}

export function PerformanceBarChart({
	chartData,
	chartConfig,
	xdataKey,
	ydataKey,
	type,
}: {
	chartData: TaskData[];
	chartConfig: ChartConfig;
	xdataKey: string;
	ydataKey: string;
	type: "High" | "Low";
}) {
	return (
		<Card className='flex flex-col w-full'>
			<CardHeader>
				<CardTitle>
					{type === "High" ? "Top 5 Highest" : "Top 5 Lowest"}{" "}
					{chartConfig[xdataKey].label} Member
				</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						layout='vertical'
						margin={{
							left: 10,
							right: 50,
						}}
					>
						<YAxis
							dataKey={ydataKey}
							type='category'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							fontSize={15}
						/>
						<XAxis dataKey={xdataKey} type='number' hide />
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						{/* Only one Bar element here */}
						<Bar
							dataKey={xdataKey}
							layout='vertical'
							radius={5}
							shape={(props: any) => {
								return (
									<rect
										{...props}
										fill={barColors[props.index]}
										x={props.x}
										y={props.y}
										width={props.width}
										height={props.height}
										rx={5}
										ry={5}
									/>
								);
							}}
						>
							<LabelList
								position='right'
								dataKey={xdataKey}
								offset={5}
								fillOpacity={1}
								className='z-50 fill-white '
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
