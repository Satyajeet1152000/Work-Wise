import { Box } from "lucide-react";
import React from "react";

const Logo = () => {
	return (
		<div className='flex justify-center items-center w-fit gap-2 mx-3'>
			<div className='flex items-center justify-center relative w-fit'>
				<Box strokeWidth={2} height={40} width={40} />
				<Box
					className='absolute rotate-180 font-extrabold'
					style={{ fill: "hsl(var(--background))" }}
					strokeWidth={3}
					height={20}
					width={20}
				/>
			</div>
			<div className='text-3xl font-semibold tracking-widest'>
				WORKFLOW
			</div>
		</div>
	);
};

export default Logo;
