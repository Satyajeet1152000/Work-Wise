"use client";
import { cn } from "@/lib/utils";
import {
	Bot,
	ChartNoAxesCombined,
	Home,
	LayoutDashboard,
	Settings,
	Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

const data = [
	{ name: "Home", icon: <Home />, href: "/home" },
	{ name: "Dashboard", icon: <LayoutDashboard />, href: "/dashboard" },
	{ name: "Teams", icon: <Users />, href: "" },
	// { name: "Boards", icon: <SquareKanbanIcon />  href: "/boards" },
	{ name: "Analytics", icon: <ChartNoAxesCombined />, href: "/analytics" },
	{ name: "AI Insights", icon: <Bot />, href: "/ai-insights" },
	{ name: "Settings", icon: <Settings />, href: "" },
];
const Menus = () => {
	const path = usePathname();
	return (
		<div className='flex h-fit justify-between md:flex-col gap-y-2 '>
			{data.map((d, i) => (
				<a
					key={i}
					href={d.href}
					className={cn(
						`flex items-center gap-x-2 px-3 py-2 text-gray-400 text-xl font-normal hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg`,
						{
							"bg-sky-600 text-white": path === d.href,
						}
					)}
				>
					{d.icon}
					<span className='hidden lg:block'>{d.name}</span>
				</a>
			))}
		</div>
	);
};

export default Menus;
