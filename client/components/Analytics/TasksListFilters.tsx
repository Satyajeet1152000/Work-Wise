"use client";

import React, { useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"; // Assuming you're using ShadCN's Table component
import { Input } from "@/components/ui/input"; // Assuming ShadCN's Input component
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"; // Assuming you have a Select component
import { Button } from "../ui/button";

// Define the data type
type Data = {
	_id: string;
	employeeId: string;
	title: string;
	category: string;
	priority: string;
	status: string;
};

// Sample data
const defaultData: Data[] = [
	{
		_id: "1",
		employeeId: "123",
		title: "Implement Authentication",
		category: "Project",
		priority: "High",
		status: "InProgress",
	},
	{
		_id: "2",
		employeeId: "124",
		title: "Implement Database",
		category: "AdHoc",
		priority: "Medium",
		status: "Completed",
	},
	{
		_id: "3",
		employeeId: "125",
		title: "Fix Bugs",
		category: "BAU",
		priority: "Low",
		status: "Overdue",
	},
	{
		_id: "4",
		employeeId: "126",
		title: "UI Design",
		category: "Project",
		priority: "High",
		status: "InProgress",
	},
	{
		_id: "5",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "6",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "7",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "8",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "9",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "10",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "11",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "12",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "13",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "14",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
	{
		_id: "15",
		employeeId: "127",
		title: "Testing",
		category: "AdHoc",
		priority: "Urgent",
		status: "Completed",
	},
];

const TasksListFilters = () => {
	const [filter, setFilter] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("all");
	const [priorityFilter, setPriorityFilter] = useState("all");
	const [assigneeFilter, setAssigneeFilter] = useState("");

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(5);

	const filteredData = defaultData.filter(
		(row) =>
			(row.title.toLowerCase().includes(filter.toLowerCase()) ||
				row.category.toLowerCase().includes(filter.toLowerCase()) ||
				row.priority.toLowerCase().includes(filter.toLowerCase())) &&
			(categoryFilter !== "all"
				? row.category === categoryFilter
				: true) &&
			(priorityFilter !== "all"
				? row.priority === priorityFilter
				: true) &&
			(assigneeFilter ? row.employeeId.includes(assigneeFilter) : true)
	);

	const totalPages = Math.ceil(filteredData.length / itemsPerPage);
	const paginatedData = filteredData.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<div className='p-4'>
			<div className='flex gap-4'>
				{/* Filter for general search */}
				<Input
					placeholder='Search tasks...'
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					className='mb-4 w-full'
				/>
				{/* Category Filter */}
				<Select
					value={categoryFilter}
					onValueChange={setCategoryFilter}
					// className='w-1/4'
				>
					<SelectTrigger>
						<SelectValue placeholder='Filter by Category' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='all'>All Categories</SelectItem>
						<SelectItem value='Project'>Project</SelectItem>
						<SelectItem value='AdHoc'>AdHoc</SelectItem>
						<SelectItem value='BAU'>BAU</SelectItem>
					</SelectContent>
				</Select>

				{/* Priority Filter */}
				<Select
					value={priorityFilter}
					onValueChange={setPriorityFilter}
					// className='w-1/4'
				>
					<SelectTrigger>
						<SelectValue placeholder='Filter by Priority' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='all'>All Priorities</SelectItem>
						<SelectItem value='High'>High</SelectItem>
						<SelectItem value='Medium'>Medium</SelectItem>
						<SelectItem value='Low'>Low</SelectItem>
						<SelectItem value='Urgent'>Urgent</SelectItem>
					</SelectContent>
				</Select>

				{/* Assignee Filter */}
				<Input
					placeholder='Search by Assignee'
					value={assigneeFilter}
					onChange={(e) => setAssigneeFilter(e.target.value)}
					// className='w-1/4'
				/>
			</div>

			<Table>
				<TableHeader className='bg-gray-500/20'>
					<TableRow>
						<TableHead className='text-white text-lg'>
							Title
						</TableHead>
						<TableHead className='text-white text-lg'>
							Category
						</TableHead>
						<TableHead className='text-white text-lg'>
							Priority
						</TableHead>
						<TableHead className='text-white text-lg'>
							Assignee
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{paginatedData.length > 0 ? (
						paginatedData.map((row) => (
							<TableRow key={row._id}>
								<TableCell>{row.title}</TableCell>
								<TableCell>{row.category}</TableCell>
								<TableCell>{row.priority}</TableCell>
								<TableCell>{row.employeeId}</TableCell>
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={4} className='text-center'>
								No tasks found.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<div className='mt-4 flex justify-between items-center'>
				<div className='flex items-center gap-2'>
					<label htmlFor='itemsPerPage'>Items per page:</label>
					<Input
						id='itemsPerPage'
						type='number'
						value={itemsPerPage}
						onChange={(e) =>
							setItemsPerPage(Number(e.target.value) || 1)
						}
						className='w-20'
					/>
				</div>
				<div className='flex items-center gap-2'>
					<Button
						onClick={() =>
							setCurrentPage((prev) => Math.max(prev - 1, 1))
						}
						disabled={currentPage === 1}
					>
						Previous
					</Button>
					<span>
						Page {currentPage} of {totalPages}
					</span>
					<Button
						onClick={() =>
							setCurrentPage((prev) =>
								Math.min(prev + 1, totalPages)
							)
						}
						disabled={currentPage === totalPages}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TasksListFilters;
