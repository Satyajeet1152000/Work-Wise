export const formatTime = (seconds: number) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

	let res = "";

	if (hours > 0) {
		res += `${hours.toString().padStart(2, "0")}:`;
	}

	res += `${minutes.toString().padStart(2, "0")}:`;
	res += `${remainingSeconds.toString().padStart(2, "0")}`;

	return res;
};

export const formatDate = (date: Date) => {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
	const month = months[date.getMonth()]; // Get month name
	const day = date.getDate().toString().padStart(2, "0"); // Ensure 2-digit day

	return `${day}-${month}-${year}`;
};
