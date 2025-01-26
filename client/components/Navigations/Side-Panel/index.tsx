import Menus from "./Menus";

const SidePanel = () => {
	return (
		<aside
			className='fixed w-full bottom-0 border md:top-20 md:w-fit md:h-full md:border-r-2 lg:w-64  p-4'
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
