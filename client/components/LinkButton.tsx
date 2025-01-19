"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
	href: string;
	label: string;
	classname?: string;
}
const LinkButton = ({ href, label, classname }: BackButtonProps) => {
	return (
		<Button
			variant={"link"}
			className={cn(" font-normal w-fit !p-0 text-md", classname)}
			size={"sm"}
			asChild
		>
			<Link
				href={href}
				className=' text-[#4293da] visited:text-[#4293da] '
				style={{ color: "#4293da" }}
			>
				&nbsp;{label}
			</Link>
		</Button>
	);
};

export default LinkButton;
