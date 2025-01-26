"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
	return (
		<button
			className='flex w-full gap-x-2 px-3 py-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg'
			onClick={() => signOut({ callbackUrl: "/login" })}
		>
			<LogOut />
			Logout
		</button>
	);
};

export default LogoutButton;
