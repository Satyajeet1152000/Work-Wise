import { Avatar } from "../../../ui/avatar";
import Image from "next/image";

const UserAvatar = ({ avatarUrl }: { avatarUrl: string }) => {
	return (
		<Avatar className='relative h-12 w-12 border bg-black  dark:bg-white'>
			<Image
				src={avatarUrl}
				alt='Avatar'
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				className='rounded-full object-cover w-full h-full'
			/>
		</Avatar>
	);
};

export default UserAvatar;
