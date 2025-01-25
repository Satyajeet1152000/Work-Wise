import { cn } from "@/lib/utils";
import { Clock3 } from "lucide-react";
import { TaskType } from "@/lib/schema";
import { useEffect, useState } from "react";
import { useModal } from "@/context/ModelContext";
import { formatDate, formatTime } from "@/lib/dateAndTimeFormatter";

interface TaskProps {
	data: TaskType;
	color: string;
}

const Task = ({ data, color }: TaskProps) => {
	const [timeSpent, setTimeSpent] = useState<number>(data.timeSpent || 0);
	const [timerRunning, setTimerRunning] = useState<boolean>(false);

	const { showModal } = useModal();

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
			style={{
				borderColor: color,
			}}
			className={cn(
				`border-2 rounded-lg p-4 flex flex-col gap-3 bg-white dark:bg-gray-800 transition-transform duration-150 ease-in-out hover:cursor-pointer`
			)}
			onMouseEnter={(e) => {
				e.currentTarget.style.boxShadow = `0 0 15px 10px ${color}50`;
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.boxShadow = "none";
			}}
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
							"bg-gray-400 text-gray-800":
								data.status === "Pending",
							"bg-blue-400 text-blue-800":
								data.status === "InProgress",
							"bg-green-400 text-green-800":
								data.status === "Completed",
							"bg-red-400 text-red-800":
								data.status === "Overdue",
						}
					)}
				>
					{data.status === "InProgress" ? "In Progress" : data.status}
				</span>
			</div>

			<p className='text-gray-600 dark:text-gray-400 text-sm line-clamp-2'>
				{data.description}
			</p>

			{/* Priority */}
			<div className='flex justify-between items-center text-sm text-gray-600 dark:text-gray-300'>
				<div>Assidned By: {data.reference?.name}</div>
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
				<div>
					<div className='flex items-center text-green-500'>
						<Clock3 className='mr-1 h-4 w-4' />

						<span>
							{formatDate(new Date(data.createdAt as Date))}
						</span>
					</div>
					<div className='flex items-center text-red-500'>
						<Clock3 className='mr-1 h-4 w-4' />
						<span>
							{formatDate(new Date(data.deadline as Date))}
						</span>
					</div>
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
