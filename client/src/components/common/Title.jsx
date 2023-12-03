const Title = ({ title }) => {
	return (
		<h2 className="mb-20 capitalize text-center w-fit text-3xl font-semibold mx-auto relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-primary before:w-1/2 before:h-1 before:rounded-full">
			{title}
		</h2>
	);
};

export default Title;
