"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitchButton = () => {
	const { theme, setTheme } = useTheme();
	return (
		<button
			className='hover:scale-125 relative'
			// variant={"ghost"}
			onClick={() => {
				if (theme === "dark") {
					setTheme("light");
				} else {
					setTheme("dark");
				}
			}}
		>
			{theme === "light" ? <Moon /> : <Sun />}
		</button>
	);
};

export default ThemeSwitchButton;
