"use client";
import React, { useState, useEffect } from "react";
import ListHeading from "./ListHeading";
import Task from "./Task";
import { ListSkeleton } from "../Skeleton";
import { TaskType } from "@/lib/schema";
import { getTasks } from "@/actions/tasksActions.";
import { useUser } from "@/context/UserContext";

const TaskLists = () => {
	const [listRecords, setListRecords] = useState<TaskType[]>([]);

	// useEffect(() => {
	// 	setListRecords([
	// 		{
	// 			_id: "65a123b9c2f2d8e4a0123458",
	// 			employeeId: "65a123b9c2f2d8e4a0123456",
	// 			title: "Implement User Authentication",
	// 			description: "Add JWT-based authentication to the API",
	// 			category: "Project",
	// 			priority: "High",
	// 			status: "InProgress",
	// 			timeEstimated: 480,
	// 			timeSpent: 240,
	// 			startDate: new Date("2025-01-20T17:00:00Z"),
	// 			deadline: new Date("2025-01-20T17:00:00Z"),
	// 			reference: {
	// 				type: "manager",
	// 				refererId: "65a123b9c2f2d8e4a0123457",
	// 			},
	// 			attachments: [
	// 				{
	// 					filename: "auth_requirements.pdf",
	// 					url: "https://storage.company.com/files/auth_req.pdf",
	// 					type: "pdf",
	// 					uploadDate: new Date("2025-01-15T09:15:00Z"),
	// 				},
	// 			],
	// 			dependencies: [],
	// 			tags: ["authentication", "security", "api"],
	// 			comments: [
	// 				{
	// 					userId: "65a123b9c2f2d8e4a0123457",
	// 					content: "Please follow our security guidelines",
	// 					timestamp: new Date("2025-01-15T09:30:00Z"),
	// 				},
	// 			],
	// 			metrics: {
	// 				efficiencyScore: 85,
	// 				impactScore: 90,
	// 				qualityScore: 88,
	// 			},
	// 		},
	// 		{
	// 			_id: "65a123b9c2f2d8e4a0123458",
	// 			employeeId: "65a123b9c2f2d8e4a0123456",
	// 			title: "Implement User Authentication asdad",
	// 			description: "Add JWT-based authentication to the API",
	// 			category: "BAU",
	// 			priority: "Low",
	// 			status: "Overdue",
	// 			timeEstimated: 480,
	// 			timeSpent: 240,
	// 			startDate: new Date("2025-01-20T17:00:00Z"),
	// 			deadline: new Date("2025-01-20T17:00:00Z"),
	// 			reference: {
	// 				type: "manager",
	// 				refererId: "65a123b9c2f2d8e4a0123457",
	// 			},
	// 			attachments: [
	// 				{
	// 					filename: "auth_requirements.pdf",
	// 					url: "https://storage.company.com/files/auth_req.pdf",
	// 					type: "pdf",
	// 					uploadDate: new Date("2025-01-15T09:15:00Z"),
	// 				},
	// 			],
	// 			dependencies: [],
	// 			tags: ["authentication", "security", "api"],
	// 			comments: [
	// 				{
	// 					userId: "65a123b9c2f2d8e4a0123457",
	// 					content: "Please follow our security guidelines",
	// 					timestamp: new Date("2025-01-15T09:30:00Z"),
	// 				},
	// 			],
	// 			metrics: {
	// 				efficiencyScore: 85,
	// 				impactScore: 90,
	// 				qualityScore: 88,
	// 			},
	// 		},
	// 		{
	// 			_id: "65a123b9c2f2d8e4a0123458",
	// 			employeeId: "65a123b9c2f2d8e4a0123456",
	// 			title: "Implement User Authentication",
	// 			description: "Add JWT-based authentication to the API",
	// 			category: "AdHoc",
	// 			priority: "Urgent",
	// 			status: "Completed",
	// 			timeEstimated: 480,
	// 			timeSpent: 240,
	// 			startDate: new Date("2025-01-20T17:00:00Z"),
	// 			deadline: new Date("2025-01-20T17:00:00Z"),
	// 			reference: {
	// 				type: "manager",
	// 				refererId: "65a123b9c2f2d8e4a0123457",
	// 			},
	// 			attachments: [
	// 				{
	// 					filename: "auth_requirements.pdf",
	// 					url: "https://storage.company.com/files/auth_req.pdf",
	// 					type: "pdf",
	// 					uploadDate: new Date("2025-01-15T09:15:00Z"),
	// 				},
	// 			],
	// 			dependencies: [],
	// 			tags: ["authentication", "security", "api"],
	// 			comments: [
	// 				{
	// 					userId: "65a123b9c2f2d8e4a0123457",
	// 					content: "Please follow our security guidelines",
	// 					timestamp: new Date("2025-01-15T09:30:00Z"),
	// 				},
	// 			],
	// 			metrics: {
	// 				efficiencyScore: 85,
	// 				impactScore: 90,
	// 				qualityScore: 88,
	// 			},
	// 		},
	// 	]);
	// }, []);

	// console.log(listRecords);
	const [loading, setLoading] = useState(false);

	const { userData } = useUser();

	useEffect(() => {
		const loadData = async () => {
			setLoading(true);
			const response = await getTasks(userData?._id);
			setListRecords(response);
			setLoading(false);
		};
		loadData();
	}, [userData?._id]);

	return (
		<div className='flex gap-5 pb-10 '>
			{[
				{ category: "BAU", heading: "BAU" },
				{ category: "AdHoc", heading: "AdHoc" },
				{ category: "Project", heading: "Project" },
			].map((s) => (
				<div
					key={s.category}
					id={s.category}
					className='flex-1 space-y-5 rounded-lg  ease-in-out transition-all duration-300 '
				>
					<ListHeading heading={s.heading} />
					{loading ? (
						<ListSkeleton />
					) : (
						listRecords
							.filter((record) => record.category === s.category)
							.map((d) => {
								return <Task key={d._id} data={d} />;
							})
						// .map((d) => <div></div>)
					)}
					{/* <AddNewButton value={s.status as StatusType} /> */}
				</div>
			))}
		</div>
	);
};

export default TaskLists;
