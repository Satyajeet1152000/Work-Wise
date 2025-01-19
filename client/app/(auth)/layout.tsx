import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main
			className='flex h-full flex-col items-center justify-center relative overflow-hidden'
			style={{
				background: `linear-gradient(45deg, #2C3E50, #000000)`,
			}}
		>
			{children}
		</main>
	);
};

export default AuthLayout;
