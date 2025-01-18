"use client";
import Header from "./Header";
import TasksListSection from "./TasksListSection";
import ViewTaskModal from "../Create-New/ViewTaskModal";

const Dashboard = ({
	user,
}: {
	user: { id: string; name: string; email: string; token: string };
}) => {
	return (
		<div className=' w-full h-full'>
			<Header name={user?.name} />
			<TasksListSection />
			<ViewTaskModal />
		</div>
	);
};

export default Dashboard;
