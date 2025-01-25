import Menus from "./Menus";

const SidePanel = () => {
	return (
		<aside
			className='fixed top-20 w-64 h-full border-r-2 p-4'
			style={{
				backgroundColor: "hsl(var(--background))",
				color: "hsl(var(--foreground))",
			}}
		>
			<Menus />
		</aside>
	);
};

export default SidePanel;
