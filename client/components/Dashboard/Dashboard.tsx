"use client";
import Header from "./Header";
import TasksListSection from "./TasksListSection";
import ViewTaskModal from "../Create-New/ViewTaskModal";
import { useUser } from "@/context/UserContext";

const Dashboard = () => {
	const { userData } = useUser();
	return (
		<div className=' w-full h-full'>
			<Header name={userData?.name || "Guest"} />
			<TasksListSection />
			<ViewTaskModal />
		</div>
	);
};

export default Dashboard;
