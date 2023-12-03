import { categories } from "../data/index";
import Button from "./common/Button";
import Title from "./common/Title";

const Categories = () => {
	return (
		<div className="container mx-auto px-5 md:px-10 py-16 md:py-20">
			<Title title="top categories" />

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
				{categories.map((category) => (
					<div
						key={category.id}
						className="flex-1 w-full h-96 sm:h-[30rem] overflow-hidden relative"
					>
						<div className="w-full h-full">
							<img
								src={category.img}
								alt={category.title}
								className="w-full object-cover object-top h-full"
							/>
						</div>
						<div className="uppercase bg-black/50 absolute top-0 left-0 flex flex-col gap-3 items-center justify-center w-full h-full text-white overflow-hidden transition-all duration-500 cursor-pointer">
							<h2 className="text-xl md:text-2xl xl:text-3xl font-semibold">
								{category.title}
							</h2>
							<Button
								text="SHOP NOW"
								className="w-36 text-[1rem] font-medium py-4 px-12 rounded-none bg-white hover:bg-transparent hover:text-white text-black hover:border-white border border-transparent"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
