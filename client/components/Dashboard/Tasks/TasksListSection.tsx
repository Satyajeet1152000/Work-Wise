import { TaskType } from "@/lib/schema";
import TaskList from "./TaskList";

interface CategoryType {
	category: string;
	heading: string;
	color: string;
}

const Category: CategoryType[] = [
	{
		category: "BAU",
		heading: "BAU",
		color: "#3b82f6",
	},
	{
		category: "AdHoc",
		heading: "AdHoc",
		color: "#22c55e",
	},
	{
		category: "Project",
		heading: "Project",
		color: "#a855f7",
	},
];
const TasksListSection = ({
	data,
	isLoading,
}: {
	data: TaskType[];
	isLoading: boolean;
}) => {
	return (
		<div className=' space-y-5'>
			{/* Tasklists */}
			<div className='flex gap-5 pb-10'>
				{Category.map((c) => (
					<div
						key={c.category}
						id={c.category}
						className='flex-1 space-y-5'
					>
						<TaskList
							category={c.category}
							data={data.filter((d) => d.category === c.category)}
							color={c.color}
							isLoading={isLoading}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default TasksListSection;
