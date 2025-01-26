"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitchButton = () => {
	const { theme, setTheme } = useTheme();
	return (
		<button
			className={`flex w-full gap-x-2 px-3 py-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg`}
			onClick={() => {
				if (theme === "dark") {
					setTheme("light");
				} else {
					setTheme("dark");
				}
			}}
		>
			{theme === "light" ? (
				<>
					<Moon /> Dark Theme
				</>
			) : (
				<>
					<Sun /> Light Theme
				</>
			)}{" "}
		</button>
	);
};

export default ThemeSwitchButton;
