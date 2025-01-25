import { cn } from "@/lib/utils";
import { CircleCheckBig, TriangleAlert } from "lucide-react";
import React from "react";

interface FormSuccessProps {
	success?: boolean;
	message?: string;
}
const FormSuccess = ({ success, message }: FormSuccessProps) => {
	if (!message) return null;
	return (
		<div
			className={cn(" p-3 rounded-md flex items-center gap-x-2 text-lg", {
				"bg-emerald-500/20 text-emerald-300": success,
				"bg-red-500/20 text-red-300": !success,
			})}
		>
			{success ? (
				<CircleCheckBig className=' h-4 w-4' />
			) : (
				<TriangleAlert className=' h-4 w-4' />
			)}
			<p>{message}</p>
		</div>
	);
};

export default FormSuccess;
