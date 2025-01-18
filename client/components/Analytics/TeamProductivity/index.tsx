import React from "react";
import { DonutChart } from "./DonutChart";

const data = [
	{
		teamId: "team123",
		teamName: "Development",
		tasks: {
			Pending: 10,
			InProgress: 15,
			Completed: 25,
			Overdue: 5,
		},
	},
	{
		teamId: "team124",
		teamName: "Marketing Team B",
		tasks: {
			Pending: 7,
			InProgress: 10,
			Completed: 18,
			Overdue: 5,
		},
	},
	{
		teamId: "team125",
		teamName: "Sales Team C",
		tasks: {
			Pending: 12,
			InProgress: 15,
			Completed: 18,
			Overdue: 5,
		},
	},
];

const TeamProductivity = () => {
	return (
		<div className='flex flex-col gap-5 '>
			<h1 className='text-3xl font-semibold'>
				{data[0].teamName} Team Productivity
			</h1>

			<div className='flex gap-5'>
				<DonutChart data={data[0]} type={"Weekly"} />
				<DonutChart data={data[1]} type={"Monthly"} />
				<DonutChart data={data[2]} type={"Yearly"} />
			</div>
		</div>
	);
};

export default TeamProductivity;
