"use server";

import { auth } from "@/auth";

export const getTasks = async () => {
	console.log("getTasks Function call");
	const session = await auth();

	const response = await fetch(
		`${process.env.API_URL}/user/tasks/${session?.user?.id}`
	);
	const data = await response.json();

	// console.log(data);
	return data.data;
};
