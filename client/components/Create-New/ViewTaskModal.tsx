import { useModal } from "@/context/ModelContext";
import { cn } from "@/lib/utils";
import { Clock3 } from "lucide-react";
import { useState } from "react";

const ViewTaskModal = () => {
	const { isModalOpen, hideModal, modalData } = useModal();

	const [newComment, setNewComment] = useState<string>("");

	if (!isModalOpen) return null;

	const handleAddComment = () => {
		if (newComment.trim()) {
			const comment = {
				userId: "current-user-id", // Replace with actual user ID
				content: newComment,
				timestamp: new Date(),
			};
			modalData?.comments?.push(comment);
			setNewComment("");
		}
	};

	const formatTime = (seconds: number) => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		return `${hours.toString().padStart(2, "0")}:${minutes
			.toString()
			.padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
	};

	return (
		<div
			className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center'
			onClick={hideModal}
		>
			<div
				className='relative bg-white dark:bg-gray-800 w-[600px] p-6 rounded-lg space-y-4'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className='flex justify-between items-center'>
					<h2 className='text-xl font-bold'>{modalData?.title}</h2>
					<button
						onClick={hideModal}
						className='text-gray-500 hover:text-gray-800 dark:hover:text-white'
					>
						✕
					</button>
				</div>

				{/* Description */}
				<p className='text-gray-700 dark:text-gray-300'>
					{modalData?.description}
				</p>

				{/* Priority */}
				<div className='flex gap-3 items-center'>
					<span
						className={cn(
							"inline-block px-3 py-1 text-sm font-medium rounded-full text-white capitalize",
							{
								"bg-green-500": modalData?.priority === "Low",
								"bg-blue-500": modalData?.priority === "Medium",
								"bg-orange-500": modalData?.priority === "High",
								"bg-red-500": modalData?.priority === "Urgent",
							}
						)}
					>
						{modalData?.priority}
					</span>
					<span
						className={cn(
							"inline-block px-3 py-1 text-sm font-medium rounded-full capitalize",
							{
								"bg-gray-300 text-gray-800":
									modalData?.status === "Pending",
								"bg-blue-300 text-blue-800":
									modalData?.status === "InProgress",
								"bg-green-300 text-green-800":
									modalData?.status === "Completed",
								"bg-red-300 text-red-800":
									modalData?.status === "Overdue",
							}
						)}
					>
						{modalData?.status}
					</span>
				</div>
				{/* Estimated and Spent Time */}
				<div className='flex justify-between items-center text-md text-gray-600 dark:text-gray-300'>
					<div>
						<p>
							Estimated:{" "}
							{formatTime(modalData?.timeEstimated || 0)}
						</p>
					</div>
					<div>
						<p>Spent: {formatTime(modalData?.timeSpent || 0)}</p>
					</div>
				</div>

				{/* assignee and deadline */}
				<div className='flex justify-between items-center text-md text-gray-600 dark:text-gray-300'>
					<div>Assidned By: {modalData?.reference?.refererId}</div>
					<div className='flex'>
						<Clock3 className='mr-1 h-4 w-4' />
						<span>
							{new Date(
								modalData?.deadline as Date
							).toLocaleDateString()}
						</span>
					</div>
				</div>

				{/* Attachments */}
				<div className=''>
					<h3 className='font-semibold text-gray-700 dark:text-gray-300 mb-2'>
						Attachments:
					</h3>
					<ul className='space-y-2'>
						{modalData?.attachments?.map((attachment, index) => (
							<li key={index} className='flex items-center'>
								<a
									href={attachment.url}
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-600 dark:text-blue-400 hover:underline'
								>
									{attachment.filename}
								</a>
								<span className='ml-2 text-sm text-gray-500 dark:text-gray-400'>
									({attachment.type})
								</span>
							</li>
						))}
					</ul>
				</div>

				{/* Comments */}
				<div>
					<h3 className='font-semibold text-gray-700 dark:text-gray-300 mb-2'>
						Comments:
					</h3>
					<div className='space-y-2 max-h-40 overflow-y-auto'>
						{modalData?.comments?.map((comment, index) => (
							<div key={index} className='p-2 border rounded-md'>
								<p className='text-sm text-gray-800 dark:text-gray-200'>
									{comment.content}
								</p>
								<span className='text-xs text-gray-500 dark:text-gray-400'>
									{new Date(
										comment?.timestamp || new Date()
									).toLocaleString()}
								</span>
							</div>
						))}
					</div>
					{/* Add a comment */}
					<div className='mt-4'>
						<textarea
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							className='w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white'
							placeholder='Write a comment...'
						/>
						<button
							onClick={handleAddComment}
							className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
						>
							Add Comment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewTaskModal;
