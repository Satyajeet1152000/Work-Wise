import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModalProvider } from "@/context/ModelContext";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Employee Productivity Tracker",
	description: "Track and manage employee productivity",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
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
			</body>
		</html>
	);
}
