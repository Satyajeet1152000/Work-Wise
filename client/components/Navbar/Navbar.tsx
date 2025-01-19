"use client";

import UserAvatar from "./UserAvatar";
import Toolbar from "./Toolbar";
import Menus from "./Menus";
import { useUser } from "@/context/UserContext";

const Navbar = () => {
	const { userData } = useUser();

	return (
		<div className='px-3 py-5 space-y-2'>
			<div>
				<UserAvatar
					user={{
						image: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
						name: userData?.name || "Guest",
					}}
				/>
				<Toolbar />
			</div>
			<Menus />
			{/* <CreateTaskButton /> */}
		</div>
	);
};

export default Navbar;
