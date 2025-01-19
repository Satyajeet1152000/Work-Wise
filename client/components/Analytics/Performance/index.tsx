"use client";

import React, { useEffect, useState } from "react";
import { PerformanceBarChart } from "./PerformanceBarChart";
import { Button } from "@/components/ui/button";
import { ChartConfig } from "@/components/ui/chart";

// metrics: {  task quality = sum of matrics / 3
// 			efficiencyScore: 85,
// 			impactScore: 75,
// 			qualityScore: 90,
// 		// },

interface TaskData {
	name: string;
	taskquality: number;
	totalassignedtasks: number;
	totalcompletedtask: number;
}

const data: TaskData[] = [
	{
		name: "John Doe",
		taskquality: 83.33,
		totalassignedtasks: 20,
		totalcompletedtask: 18,
	},
	{
		name: "Jane Smith",
		taskquality: 78.33,
		totalassignedtasks: 15,
		totalcompletedtask: 13,
	},
	{
		name: "Samuel Adams",
		taskquality: 86,
		totalassignedtasks: 22,
		totalcompletedtask: 19,
	},
	{
		name: "Emily Davis",
		taskquality: 87,
		totalassignedtasks: 18,
		totalcompletedtask: 16,
	},
	{
		name: "Michael Brown",
		taskquality: 74.67,
		totalassignedtasks: 25,
		totalcompletedtask: 20,
	},
	{
		name: "Sarah Wilson",
		taskquality: 88.67,
		totalassignedtasks: 19,
		totalcompletedtask: 17,
	},
	{
		name: "David Moore",
		taskquality: 74.67,
		totalassignedtasks: 23,
		totalcompletedtask: 20,
	},
	{
		name: "Sophia Taylor",
		taskquality: 79.67,
		totalassignedtasks: 21,
		totalcompletedtask: 18,
	},
	{
		name: "William Lee",
		taskquality: 75,
		totalassignedtasks: 24,
		totalcompletedtask: 22,
	},
	{
		name: "Olivia Harris",
		taskquality: 83,
		totalassignedtasks: 20,
		totalcompletedtask: 19,
	},
];

const Performance = () => {
	const [activeButton, setActiveButton] = useState("taskquality");
	const [top5, setTop5] = useState<{ high: TaskData[]; low: TaskData[] }>({
		high: [],
		low: [],
	});
	const [chartConfig, setChartConfig] = useState<ChartConfig>({
		taskquality: {
			label: "Task Quality",
		},
	});
	const [dataKey, setdataKey] = useState({ x: "taskquality", y: "name" });

	const handleButtonClick = (button: string) => {
		setActiveButton(button);
	};

	useEffect(() => {
		const sortedData = [...data].sort(
			(a, b) => b.taskquality - a.taskquality
		);
		const high = sortedData.slice(0, 5);
		const low = sortedData.slice(-5).reverse();
		setTop5({ high, low });
	}, []);

	useEffect(() => {
		let sortedData: TaskData[] = [];
		let high: TaskData[] = [];
		let low: TaskData[] = [];

		if (activeButton === "taskquality") {
			sortedData = [...data].sort(
				(a, b) => b.taskquality - a.taskquality
			);
			high = sortedData.slice(0, 5);
			low = sortedData.slice(-5).reverse();

			setTop5({ high, low });
			setChartConfig({
				taskquality: {
					label: "Task Quality",
				},
			});
			setdataKey({ x: "taskquality", y: "name" });
		} else if (activeButton === "taskQuantity") {
			sortedData = [...data].sort(
				(a, b) => b.totalassignedtasks - a.totalassignedtasks
			);
			high = sortedData.slice(0, 5);
			low = sortedData.slice(-5).reverse();
			setTop5({ high, low });
			setChartConfig({
				totalassignedtasks: {
					label: "Task Quantity",
				},
			});
			setdataKey({ x: "totalassignedtasks", y: "name" });
		} else if (activeButton === "taskCompletion") {
			sortedData = [...data].sort(
				(a, b) => b.totalcompletedtask - a.totalcompletedtask
			);
			high = sortedData.slice(0, 5);
			low = sortedData.slice(-5).reverse();
			setTop5({ high, low });
			setChartConfig({
				totalcompletedtask: {
					label: "Task Completion",
				},
			});
			setdataKey({ x: "totalcompletedtask", y: "name" });
		}
	}, [activeButton]);

	return (
		<div className='flex flex-col gap-5'>
			<h1 className='text-3xl font-semibold'>Performance of the Team</h1>

			<div className='flex gap-5 text-lg'>
				<Button
					onClick={() => handleButtonClick("taskquality")}
					className={`${
						activeButton === "taskquality"
							? "bg-blue-600 hover:bg-blue-500"
							: "bg-slate-600 hover:bg-slate-500"
					} text-white`}
				>
					Task Quality
				</Button>
				<Button
					onClick={() => handleButtonClick("taskQuantity")}
					className={`${
						activeButton === "taskQuantity"
							? "bg-blue-600 hover:bg-blue-500"
							: "bg-slate-600 hover:bg-slate-500"
					} text-white`}
				>
					Task Quantity
				</Button>
				<Button
					onClick={() => handleButtonClick("taskCompletion")}
					className={`${
						activeButton === "taskCompletion"
							? "bg-blue-600 hover:bg-blue-500"
							: "bg-slate-600 hover:bg-slate-500"
					} text-white`}
				>
					Task Completion
				</Button>
			</div>

			<div className='flex gap-5'>
				<PerformanceBarChart
					chartData={top5.high}
					chartConfig={chartConfig}
					xdataKey={dataKey.x}
					ydataKey={dataKey.y}
					type='High'
				/>
				<PerformanceBarChart
					chartData={top5.low}
					chartConfig={chartConfig}
					xdataKey={dataKey.x}
					ydataKey={dataKey.y}
					type='Low'
				/>
			</div>
		</div>
	);
};

export default Performance;
