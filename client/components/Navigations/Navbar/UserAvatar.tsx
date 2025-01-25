// import { AvatarProps } from "@radix-ui/react-avatar";
import { AvatarProps } from "@radix-ui/react-avatar";
import { Avatar } from "../../ui/avatar";
import Image from "next/image";
import { auth } from "@/auth";

type UserAvatarProps = Partial<AvatarProps> & {
	user: {
		name: string;
		image: string;
	};
};
const UserAvatar = async () => {
	const session = await auth();
	return (
		<div className='flex items-center gap-3'>
			<Avatar className='relative h-12 w-12 border bg-black  dark:bg-white'>
				<Image
					src={session?.user?.avatar as string}
					alt='Avatar'
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='rounded-full object-cover w-full h-full'
				/>
			</Avatar>
		</div>
	);
};

export default UserAvatar;
