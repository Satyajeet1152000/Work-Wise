import { auth } from "@/auth";
import { CircleHelp } from "lucide-react";
import React from "react";

const HomeHeader = async () => {
	const greeting = () => {
		const hours = new Date().getHours();
		if (hours < 12) {
			return "Good morning";
		} else if (hours < 18) {
			return "Good afternoon";
		} else {
			return "Good evening";
		}
	};
	const session = await auth();
	return (
		<div className='flex items-center justify-between w-[100%]'>
			<h1 className={" text-4xl"}>
				<span className='font-thin'>{greeting()}, </span>
				<span className='font-semibold'>
					{session?.user?.name as string} 👋
				</span>
			</h1>
		</div>
	);
};

export default HomeHeader;
