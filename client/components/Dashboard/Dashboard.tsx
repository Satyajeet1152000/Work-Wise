"use client";

import { useEffect, useState } from "react";
import { getTasks } from "@/actions/tasks/tasksActions";
import { TaskType } from "@/lib/schema";
import TasksListSection from "./Tasks/TasksListSection";
import ViewTaskModal from "./ViewTaskModal";

const Dashboard = () => {
	const [loading, setLoading] = useState(false);
	const [taskRecords, setTaskRecords] = useState<TaskType[]>([]);

	// const { session } = useCurrentSession();
	useEffect(() => {
		const loadData = async () => {
			setLoading(true);
			const response = await getTasks();
			setTaskRecords(response);

			setLoading(false);
		};
		loadData();
	}, []);

	return (
		<div className=' w-full h-full'>
			<TasksListSection data={taskRecords} isLoading={loading} />
			<ViewTaskModal />
		</div>
	);
};

export default Dashboard;
