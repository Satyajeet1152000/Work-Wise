import Navbar from "@/components/Navbar/Navbar";
import { ModalProvider } from "@/context/ModelContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

const layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<main>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
				enableSystem
				disableTransitionOnChange
			>
				{/* <AuthProvider> */}
				<ModalProvider>
					<main className='flex h-screen'>
						<div className='w-72 flex-none relative'>
							<div className='fixed w-72 h-full border-r-2 border-gray-200 dark:border-gray-500 rounded-r-xl'>
								<Navbar />
							</div>
						</div>
						<div className=' flex-grow m-5 '>{children}</div>
					</main>
				</ModalProvider>
				{/* </AuthProvider> */}
			</ThemeProvider>
		</main>
	);
};

export default layout;
