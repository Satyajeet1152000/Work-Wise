"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
	return (
		<button
			className='text-lg hover:scale-125 '
			onClick={() => signOut({ callbackUrl: "/login" })}
		>
			Logout
		</button>
	);
};

export default LogoutButton;
