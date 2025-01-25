// import usersData from "./users.json" assert { type: "json" };
// import tasksData from "./tasks.json" assert { type: "json" };
// import teamsData from "./teams.json" assert { type: "json" };
// import notificationsData from "./notifications.json" assert { type: "json" };

import User from "../models/users.model.js";

// import User from "../models/users.model.js";
// import Task from "../models/tasks.model.js";
// import Team from "../models/team.model.js";
// import Notification from "../models/notifications.model.js";

// export const addUser = async () => {
// 	for (const userData of usersData) {
// 		try {
// 			const user = new User(userData);
// 			await user.save(); // Save the user to the database one by one
// 			console.log(`User ${userData.name} added successfully!`);
// 		} catch (error) {
// 			console.error(`Error adding user ${userData.name}:`, error.message);
// 			// Skip this error and continue with the next user
// 		}
// 	}
// };

// export const addTask = async () => {
// 	for (const taskData of tasksData) {
// 		try {
// 			const task = new Task(taskData);
// 			await task.save(); // Save the task to the database one by one
// 			console.log(`Task "${taskData.title}" added successfully!`);
// 		} catch (error) {
// 			console.error(
// 				`Error adding task "${taskData.title}":`,
// 				error.message
// 			);
// 			// Skip this error and continue with the next task
// 		}
// 	}
// };

// export const addTeam = async () => {
// 	for (const teamData of teamsData) {
// 		try {
// 			teamData.name =
// 				teamData.name + " - " + Math.floor(Math.random() * 100000);
// 			const team = new Team(teamData);
// 			await team.save(); // Save the team to the database one by one
// 			console.log(`Team "${teamData.name}" added successfully!`);
// 		} catch (error) {
// 			console.error(
// 				`Error adding team "${teamData.name}":`,
// 				error.message
// 			);
// 			// Skip this error and continue with the next team
// 		}
// 	}
// };

// export const addNotification = async () => {
// 	for (const notificationData of notificationsData) {
// 		try {
// 			const notification = new Notification(notificationData);
// 			await notification.save(); // Save the notification to the database one by one
// 			console.log(
// 				`Notification "${notificationData.title}" added successfully!`
// 			);
// 		} catch (error) {
// 			console.error(
// 				`Error adding notification "${notificationData.title}":`,
// 				error.message
// 			);
// 			// Skip this error and continue with the next notification
// 		}
// 	}
// };

// export const assignManagerBasedOnRole = async () => {
// 	try {
// 		console.log("Fetching employees, managers, and admins...");

// 		// Get all employees, managers, and admins
// 		const employees = await User.find({ role: "employee" });
// 		const managers = await User.find({ role: "manager" });
// 		const admins = await User.find({ role: "admin" });

// 		console.log(
// 			`Found ${employees.length} employees, ${managers.length} managers, and ${admins.length} admins.`
// 		);

// 		// Assign random manager to employees
// 		for (let i = 0; i < employees.length; i++) {
// 			const employee = employees[i];
// 			const randomManager =
// 				managers[Math.floor(Math.random() * managers.length)];
// 			employee.manager = randomManager._id;
// 			await employee.save();
// 			console.log(
// 				`Assigned manager ${randomManager.name} to employee ${employee.name}`
// 			);
// 		}

// 		console.log("Manager assignments to employees completed.");

// 		// Assign random admin to managers
// 		for (let i = 0; i < managers.length; i++) {
// 			const manager = managers[i];
// 			const randomAdmin =
// 				admins[Math.floor(Math.random() * admins.length)];
// 			manager.manager = randomAdmin._id;
// 			await manager.save();
// 			console.log(
// 				`Assigned admin ${randomAdmin.name} to manager ${manager.name}`
// 			);
// 		}

// 		console.log("Admin assignments to managers completed.");
// 	} catch (error) {
// 		console.error("Error during assignment:", error);
// 	}
// };

// export const assignTasksBasedOnRole = async () => {
// 	try {
// 		console.log("Fetching employees, managers, and admins...");

// 		// Get all employees, managers, and admins
// 		const employees = await User.find({ role: "employee" });
// 		const managers = await User.find({ role: "manager" });
// 		const admins = await User.find({ role: "admin" });

// 		console.log(
// 			`Found ${employees.length} employees, ${managers.length} managers, and ${admins.length} admins.`
// 		);

// 		// Fetch all tasks
// 		const tasks = await Task.find();

// 		console.log(`Found ${tasks.length} tasks.`);

// 		for (let i = 0; i < tasks.length; i++) {
// 			const task = tasks[i];

// 			if (task.reference.type === "manager") {
// 				const randomManager =
// 					managers[Math.floor(Math.random() * managers.length)];

// 				task.employeeId =
// 					employees[Math.floor(Math.random() * employees.length)]._id;

// 				task.reference = {
// 					type: "manager",
// 					refererId: randomManager._id,
// 				};
// 				await task.save();
// 				console.log(
// 					`Assigned task to employee by manager: Task ID - ${task._id}`
// 				);
// 			} else if (task.reference.type === "colleague") {
// 				const randomColleague =
// 					employees[Math.floor(Math.random() * employees.length)];

// 				task.employeeId =
// 					employees[Math.floor(Math.random() * employees.length)]._id;

// 				task.reference = {
// 					type: "colleague",
// 					refererId: randomColleague._id,
// 				};
// 				await task.save();
// 				console.log(
// 					`Assigned task to employee by colleague: Task ID - ${task._id}`
// 				);
// 			}
// 		}

// 		console.log("Task assignments completed.");
// 	} catch (error) {
// 		console.error("Error during task assignment:", error);
// 	}
// };

// export const updateTeamsAndChallenges = async () => {
// 	try {
// 		console.log("Fetching managers and employees...");

// 		// Fetch all managers and employees
// 		const managers = await User.find({ role: "manager" });
// 		const employees = await User.find({ role: "employee" });

// 		console.log(
// 			`Found ${managers.length} managers and ${employees.length} employees.`
// 		);

// 		// Update teams and challenges
// 		const teams = await Team.find();

// 		for (let i = 0; i < teams.length; i++) {
// 			const team = teams[i];

// 			// Randomly select a manager for the team
// 			const randomManager =
// 				managers[Math.floor(Math.random() * managers.length)];

// 			// Update the managerId for the team
// 			team.managerId = randomManager._id;
// 			console.log(
// 				`Updated team ${team.name} with manager ${randomManager.name}`
// 			);

// 			// Add random employees to the team (team members length will be random)
// 			const randomMemberCount = Math.floor(Math.random() * 6) + 5; // Add between 5 to 10 members
// 			const randomEmployees = [];

// 			for (let j = 0; j < randomMemberCount; j++) {
// 				const randomEmployee =
// 					employees[Math.floor(Math.random() * employees.length)];
// 				if (!randomEmployees.includes(randomEmployee._id)) {
// 					randomEmployees.push(randomEmployee._id);
// 				}
// 			}

// 			// Push the selected employees to the team members
// 			team.members.push(...randomEmployees);

// 			// Update challenges with random participants (at least 5 employees per challenge)
// 			for (let challenge of team.challenges) {
// 				const randomChallengeParticipants = [];

// 				while (randomChallengeParticipants.length < 5) {
// 					const randomEmployee =
// 						employees[Math.floor(Math.random() * employees.length)];
// 					if (
// 						!randomChallengeParticipants.includes(
// 							randomEmployee._id
// 						)
// 					) {
// 						randomChallengeParticipants.push(randomEmployee._id);
// 					}
// 				}

// 				challenge.participants = randomChallengeParticipants;

// 				console.log(
// 					`Updated challenge ${challenge.title} with participants`
// 				);
// 			}

// 			await team.save();
// 			console.log(`Updated members for team ${team.name}`);
// 		}

// 		console.log("Teams and challenges updated successfully.");
// 	} catch (error) {
// 		console.error("Error during updating teams and challenges:", error);
// 	}
// };

// export const assignRandomUsersToNotifications = async () => {
// 	try {
// 		// Fetch all users from the database
// 		const users = await User.find();

// 		console.log(`Found ${users.length} users in the database.`);

// 		const notifications = await Notification.find();
// 		console.log(`Found ${notifications.length} notifications to update.`);

// 		// Iterate over the notifications and assign a random user to each one
// 		for (let notification of notifications) {
// 			// Select a random user from the users array
// 			const randomUser = users[Math.floor(Math.random() * users.length)];

// 			// Update the notification with the random user's ID
// 			notification.userId = randomUser._id;

// 			// Save the updated notification
// 			await notification.save();
// 			console.log(`Assigned notification to user ${randomUser.name}.`);
// 		}

// 		console.log("User assignments to notifications completed.");
// 	} catch (error) {
// 		console.error("Error during user assignment to notifications:", error);
// 	}
// };

export const updateUserImage = async () => {
	try {
		console.log("Fetching users...");

		// Fetch all users from the database
		const users = await User.find();

		console.log(`Found ${users.length} users in the database.`);

		// Iterate over the users and update their image
		for (let user of users) {
			// Select a random number between 50 and 75
			const randomNumber = Math.floor(Math.random() * 25) + 50;

			// Update the user's image
			user.avatar = `https://xsgames.co/randomusers/assets/avatars/male/${randomNumber}.jpg`;

			// Save the updated user
			await user.save();
			console.log(`Updated user ${user.name} with image.`);
		}

		console.log("User images updated successfully.");
	} catch (error) {
		console.error("Error during updating user images:", error);
	}
};
