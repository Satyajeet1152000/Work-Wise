import { Settings } from "lucide-react";
import React from "react";

const SettingButton = () => {
	return (
		<button className='flex w-full gap-x-2 px-3 py-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white rounded-lg'>
			<Settings />
			Setting
		</button>
	);
};

export default SettingButton;
