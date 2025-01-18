"use server";

export const getTaskList = async () => {
	// const data = await auth();
	const data = {
		user: {
			id: "12345",
			name: "Satyajeet Singh",
			email: "satyajeet@gmail.com",
			token: "123456",
		},
	};

	const response = await fetch(`${process.env.API_URL}/tasks`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${data?.user.token}`,
		},
	});

	const result = await response.json();

	return result;
};
