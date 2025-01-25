import HomeHeader from "@/components/Home/HomeHeader";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='m-5'>
			<HomeHeader />
			{children}
		</div>
	);
};

export default HomeLayout;
