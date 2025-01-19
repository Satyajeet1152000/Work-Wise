export const getTasks = async (userid) => {
	const response = await fetch(`${process.env.API_URL}/user/tasks/${userid}`);
	const data = await response.json();
	return data.data;
};
