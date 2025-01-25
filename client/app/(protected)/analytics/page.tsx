import { BreakdownByCategoryPie } from "@/components/Analytics/BreakdownByCategoryPie";
import Performance from "@/components/Analytics/Performance";
import { ProductivityBar } from "@/components/Analytics/ProductivityBar";
import { TasksAllocationPerDay } from "@/components/Analytics/TasksAllocationPerDay";
import TasksListFilters from "@/components/Analytics/TasksListFilters";
import TeamProductivity from "@/components/Analytics/TeamProductivity";
import OutputChart from "@/components/Analytics/WorkloadAndOutput/OutputChart";
import WorloadChart from "@/components/Analytics/WorkloadAndOutput/WorkloadChart";
import React from "react";

const AnalyticsPage = () => {
	return (
		<div className='flex flex-col gap-5'>
			{/* Productivity Container */}
			<div className=' flex gap-5'>
				<ProductivityBar />
				<BreakdownByCategoryPie />
				<TasksAllocationPerDay />
			</div>

			<div>
				<TasksListFilters />
			</div>

			<div className='flex gap-5'>
				<WorloadChart />
				<OutputChart />
			</div>

			<div className='space-y-5'>
				<Performance />
				<TeamProductivity />
			</div>
		</div>
	);
};

export default AnalyticsPage;
