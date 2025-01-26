"use client";

import { useState } from "react";
import UserAvatar from "./UserAvatar";
import { X } from "lucide-react";
import ThemeSwitchButton from "./ThemeSwitchButton";
import LogoutButton from "./LogoutButton";
import SettingButton from "./SettingButton";

const UserAvatarMenu = ({ avatarUrl }: { avatarUrl: string | null }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				className='border-2 border-transparent hover:border-sky-500 rounded-full'
				onClick={() => setOpen(!open)}
			>
				<UserAvatar avatarUrl={avatarUrl as string} />
			</button>
			<div
				className='absolute top-16 right-10 p-2 w-52 z-10 space-y-1 backdrop-blur-sm shadow-lg shadow-black rounded-md border'
				style={{
					backgroundColor: "hsl(var(--background)/0.9)",
					visibility: open ? "visible" : "hidden",
				}}
			>
				<div className='flex justify-end p-2'>
					<X
						className='hover:text-sky-500 cursor-pointer'
						onClick={() => setOpen(false)}
					/>
				</div>
				<ThemeSwitchButton />
				<SettingButton />
				<LogoutButton />
			</div>
		</>
	);
};

export default UserAvatarMenu;
