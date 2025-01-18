import { BreakdownByCategoryPie } from "@/components/Analytics/BreakdownByCategoryPie";
import { ProductivityBar } from "@/components/Analytics/ProductivityBar";
import { TasksAllocationPerDay } from "@/components/Analytics/TasksAllocationPerDay";
import React from "react";

const AnalyticsPage = () => {
	return (
		<div className='flex'>
			{/* Productivity Container */}
			<div className=' flex gap-5 w-full justify-between'>
				<ProductivityBar />
				<BreakdownByCategoryPie />
				<TasksAllocationPerDay />
			</div>
		</div>
	);
};

export default AnalyticsPage;
