import { cn } from "@/lib/utils";
import { Clock3 } from "lucide-react";
import { TaskType } from "@/lib/schema";
import { useEffect, useState } from "react";
import { useModal } from "@/context/ModelContext";

interface TaskProps {
	data: TaskType;
}

const Task = ({ data }: TaskProps) => {
	const [timeSpent, setTimeSpent] = useState<number>(data.timeSpent || 0);
	const [timerRunning, setTimerRunning] = useState<boolean>(false);

	const { showModal } = useModal();

	const formatTime = (seconds: number) => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		return `${hours.toString().padStart(2, "0")}:${minutes
			.toString()
			.padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
	};

	useEffect(() => {
		let timer: NodeJS.Timeout | undefined;
		if (timerRunning) {
			timer = setInterval(() => {
				setTimeSpent((prevTime) => prevTime + 1);
			}, 1000);
		} else {
			clearInterval(timer);
		}

		return () => clearInterval(timer);
	}, [timerRunning]);

	return (
		<div
			className={cn(
				"border-2 rounded-lg p-4 flex flex-col gap-3 bg-white dark:bg-gray-800 shadow-sm transition-transform duration-150 ease-in-out hover:scale-105 hover:cursor-pointer",
				{
					"border-blue-500": data.category === "BAU",
					"border-green-500": data.category === "AdHoc",
					"border-purple-500": data.category === "Project",
				}
			)}
			onClick={() => showModal(data)}
		>
			<div className='flex items-center justify-between'>
				<h1 className='text-lg font-semibold text-gray-700 dark:text-gray-100'>
					{data.title}
				</h1>
				{/* status */}
				<span
					className={cn(
						"inline-block px-3 py-1 text-sm font-medium rounded-full capitalize",
						{
							"bg-gray-300 text-gray-800":
								data.status === "Pending",
							"bg-blue-300 text-blue-800":
								data.status === "InProgress",
							"bg-green-300 text-green-800":
								data.status === "Completed",
							"bg-red-300 text-red-800":
								data.status === "Overdue",
						}
					)}
				>
					{data.status}
				</span>
			</div>

			<p className='text-gray-600 dark:text-gray-400 text-sm'>
				{data.description}
			</p>

			{/* Priority */}
			<div className='flex justify-between items-center text-sm text-gray-600 dark:text-gray-300'>
				<div>Assidned By: {data.reference?.refererId}</div>
				<div>
					<span
						className={cn(
							"inline-block px-3 py-1 text-sm font-medium rounded-full text-white capitalize",
							{
								"bg-green-500": data.priority === "Low",
								"bg-blue-500": data.priority === "Medium",
								"bg-orange-500": data.priority === "High",
								"bg-red-500": data.priority === "Urgent",
							}
						)}
					>
						{data.priority}
					</span>
				</div>
			</div>
			{/* Estimated and Spent Time */}
			<div className='flex justify-between items-center text-lg text-gray-600 dark:text-gray-300'>
				<div>
					<p>Estimated: {formatTime(data.timeEstimated || 0)}</p>
				</div>
				<div>
					<p>Spent: {formatTime(timeSpent)}</p>
				</div>
			</div>

			{/* Countdown Timer */}

			{/* deadline */}
			<div className='flex items-center text-gray-600 dark:text-gray-300 text-sm justify-between'>
				<div className='flex'>
					<Clock3 className='mr-1 h-4 w-4' />
					<span>
						{new Date(data.deadline as Date).toLocaleDateString()}
					</span>
				</div>

				<div className='flex items-center space-x-2'>
					<button
						className={cn(
							"px-4 py-2 bg-emerald-700 text-white rounded-lg text-md",
							{
								"bg-green-500 ": timerRunning,
							}
						)}
						onClick={(e) => {
							e.stopPropagation();
							setTimerRunning(!timerRunning);
						}}
					>
						{timerRunning ? "Pause Timer" : "Start Timer"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Task;
