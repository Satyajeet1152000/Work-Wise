"use server";

import Dashboard from "@/components/Dashboard/Dashboard";

const DashboardPage = async () => {
	// type Data = {
	//     user: {
	//         id: string;
	//         name: string;
	//         email: string;
	//         token: string;
	//     };
	// };

	const data = {
		user: {
			id: "12345",
			name: "Satyajeet Singh",
			email: "satyajeet@gmail.com",
			token: "123456",
		},
	};

	return (
		<Dashboard
			user={{
				id: data?.user.id ?? "",
				name: data?.user.name ?? "",
				email: data?.user.email ?? "",
				token: data?.user.token ?? "",
			}}
		/>
	);
};

export default DashboardPage;
