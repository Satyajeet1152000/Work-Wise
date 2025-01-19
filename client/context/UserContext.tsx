"use client";

import { UserType } from "@/lib/schema";
import { redirect } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
	userData: UserType | null;
	login: (user: UserType) => void;
	logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
	const [userData, setUserData] = useState<UserType | null>(() => {
		const storedData = localStorage.getItem("userData");
		if (storedData) {
			return JSON.parse(storedData);
		}
		return null;
	});
	// const [isClient, setIsClient] = useState(false);

	// useEffect(() => {
	// 	setIsClient(true); // Ensure this runs only on the client
	// 	const storedData = localStorage.getItem("userData");
	// 	if (storedData) {
	// 		setUserData(JSON.parse(storedData));
	// 	}
	// }, []);

	const logout = () => {
		setUserData(null);
		localStorage.removeItem("userData");
		redirect("/login");
	};

	const login = (userData: UserType) => {
		setUserData(userData);
		localStorage.setItem("userData", JSON.stringify(userData));
	};

	return (
		<UserContext.Provider value={{ userData, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
