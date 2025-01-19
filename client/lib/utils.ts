import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export interface ApiResponse<T = unknown> {
	success: boolean;
	data: T;
	error?: string;
}
