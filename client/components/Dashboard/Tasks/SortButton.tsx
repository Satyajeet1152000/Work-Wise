"use client";

import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import { useState } from "react";

const SortButton = ({ onClick }: { onClick: (sort: string) => void }) => {
	const [sortBy, setSortBy] = useState("asc");

	const handleClick = () => {
		const newSortBy = sortBy === "asc" ? "desc" : "asc"; // Calculate new sort order
		setSortBy(newSortBy); // Update state
		onClick(newSortBy); // Pass updated sort order to parent
	};

	return (
		<button onClick={handleClick} title='Sort by deadline'>
			{sortBy === "asc" ? (
				<ArrowUpNarrowWide className={`rounded-sm hover:scale-125`} />
			) : (
				<ArrowDownNarrowWide
					className={`rounded-sm hover:scale-125 `}
				/>
			)}
		</button>
	);
};

export default SortButton;
