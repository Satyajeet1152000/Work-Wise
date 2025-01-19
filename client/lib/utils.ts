import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export interface ApiResponse {
	success: boolean;
	data: any; // Adjust to the type of your data, e.g. an array or object
	error?: string;
}
