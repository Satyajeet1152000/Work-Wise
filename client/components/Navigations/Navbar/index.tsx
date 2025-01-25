import LeftNavTool from "./LeftNavTool";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<nav
			className='fixed top-0 w-full border-b-2 h-20 backdrop-blur-md flex items-center justify-between pr-8'
			style={{
				backgroundColor: "hsl(var(--background) / 0.5)",
				color: "hsl(var(--foreground))",
			}}
		>
			<Logo />
			<LeftNavTool />
		</nav>
	);
};

export default Navbar;
