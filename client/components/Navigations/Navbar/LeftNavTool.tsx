import { Bell, MessageSquareMore, Settings } from "lucide-react";
import React from "react";
import UserAvatar from "./UserAvatar";
import ThemeSwitchButton from "./ThemeSwitchButton";
import LogoutButton from "./LogoutButton";

const LeftNavTool = () => {
	return (
		<div className='flex gap-5 justify-center items-center'>
			<button className='hover:scale-125 relative'>
				<MessageSquareMore />
				<div className='bg-sky-400 w-3 h-3 rounded-full absolute top-0 right-0'></div>
			</button>
			<button className='hover:scale-125'>
				<Settings />
			</button>
			<button className='hover:scale-125 relative'>
				<Bell />
				<div className='bg-sky-400 w-3 h-3 rounded-full absolute top-0 right-0'></div>
			</button>
			<ThemeSwitchButton />
			<LogoutButton />
			<UserAvatar />
		</div>
	);
};

export default LeftNavTool;
