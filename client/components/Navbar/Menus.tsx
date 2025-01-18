import {
	ChartLine,
	HouseIcon,
	Settings,
	SquareKanbanIcon,
	Users,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const data = [
	{ name: "Dashboard", icon: <HouseIcon />, href: "/dashboard" },
	// { name: "Boards", icon: <SquareKanbanIcon />  href: "/boards" },
	{ name: "Teams", icon: <Users />, href: "/teams" },
	{ name: "Analytics", icon: <ChartLine />, href: "/analytics" },
	{ name: "Settings", icon: <Settings />, href: "" },
];
const Menus = () => {
	return (
		<div className='flex flex-col gap-y-2'>
			{data.map((d, i) => (
				<a
					key={i}
					href={d.href}
					className='flex items-center gap-x-3 text-gray-500 text-lg font-normal hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-2 py-1 rounded-lg'
				>
					{d.icon}
					{d.name}
				</a>
			))}
		</div>
	);
};

export default Menus;
