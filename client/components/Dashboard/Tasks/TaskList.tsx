"use client";
import Task from "./Task";
import { ListSkeleton } from "../../Skeleton";
import { TaskType } from "@/lib/schema";
import SortButton from "./SortButton";
import { useEffect, useState } from "react";

interface TaskListProps {
	category: string;
	data: TaskType[];
	color: string;
	isLoading: boolean;
}

const TaskList = ({ category, data, color, isLoading }: TaskListProps) => {
	const [sortedData, setSortedData] = useState<TaskType[]>(data);

	useEffect(() => {
		const sorted = [...data].sort((a, b) => {
			const dateA = new Date(a.deadline as Date).getTime();
			const dateB = new Date(b.deadline as Date).getTime();
			return dateA - dateB;
		});
		setSortedData(sorted);
	}, [isLoading]);

	function handleSortBy(sort: string) {
		const sorted = [...data].sort((a, b) => {
			const dateA = new Date(a.deadline as Date).getTime();
			const dateB = new Date(b.deadline as Date).getTime();

			if (sort === "asc") {
				return dateA - dateB; // Ascending order
			} else {
				return dateB - dateA; // Descending order
			}
		});

		setSortedData(sorted);
	}
	return (
		<div className='flex-1 space-y-5 '>
			<div
				className='w-full text-2xl text-gray-700 flex items-center justify-between py-3 px-5 dark:text-gray-100 rounded-lg'
				style={{ backgroundColor: `${color}cc` }}
			>
				<h1>{category}</h1>
				<SortButton color={color} onClick={handleSortBy} />
			</div>
			{isLoading ? (
				<ListSkeleton />
			) : (
				sortedData.map((d) => {
					return <Task key={d._id} data={d} color={color} />;
				})
			)}
		</div>
	);
};

export default TaskList;
