import { auth } from "@/auth";
import UserAvatarMenu from "./UserAvatarMenu";

const UserAvatarMenuContainer = async () => {
	const session = await auth();
	const avatarUrl = session?.user?.avatar || null;

	return <UserAvatarMenu avatarUrl={avatarUrl} />;
};

export default UserAvatarMenuContainer;
