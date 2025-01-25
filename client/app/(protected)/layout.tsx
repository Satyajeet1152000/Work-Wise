// import { auth } from "@/auth";
import Navbar from "@/components/Navigations/Navbar";
import SidePanel from "@/components/Navigations/Side-Panel";
import React from "react";

const layout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	// const data = await auth();
	return (
		<>
			<SidePanel />
			<Navbar />
			<main className='mt-24 ml-64'>{children}</main>
		</>
	);
};

export default layout;
