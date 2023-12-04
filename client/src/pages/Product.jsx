import { FiPlus, FiMinus } from "react-icons/fi";

import Button from "../components/common/Button";

const Product = () => {
	return (
		<div className="container mx-auto px-5 md:px-10 py-16 lg:py-28">
			<div className="flex items-start lg:flex-row flex-col gap-5 lg:gap-0">
				<img
					alt="ecommerce"
					className="lg:w-1/2 w-full lg:max-h-[38rem] h-full aspect-square max-h-[40rem] object-cover object-top rounded"
					src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
				/>
				<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
					<h2 className="text-sm title-font text-gray-500 trackingWidest">
						Epic Store.
					</h2>
					<h1 className="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-1">
						The Catcher in the Rye
					</h1>
					<p className="leading-relaxed text-sm md:text-base">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
						voluptas porro commodi vel, obcaecati impedit quidem tempore alias
						consequatur, autem dicta eveniet non, odio iure dignissimos. Maiores
						dolore dicta dolores. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Incidunt iusto autem impedit neque molestiae
						earum, veritatis velit assumenda ad minima doloribus natus
						voluptates eius vitae perferendis dolorum commodi eaque aspernatur?
					</p>

					<div className="flex items-center gap-5 mt-10">
						<div className="w-fit rounded flex items-center gap-5 border">
							<button className="text-xl hover:bg-green-500/20 border-r rounded-l p-2">
								<FiPlus />
							</button>
							<p className="text-xl font-medium">1</p>
							<button className="text-xl hover:bg-red-500/20 border-l rounded-r p-2">
								<FiMinus />
							</button>
						</div>
						<p className="title-font font-medium text-2xl md:text-3xl text-gray-900">
							$58.00
						</p>
					</div>
					<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
						<div className="flex">
							<span className="mr-3">Color</span>
							<button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
							<button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
							<button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
						</div>
						<div className="flex ml-3 sm:ml-6 items-center">
							<span className="mr-3">Size</span>
							<div className="relative">
								<select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
									<option>SM</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</select>
								<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4"
										viewBox="0 0 24 24"
									>
										<path d="M6 9l6 6 6-6"></path>
									</svg>
								</span>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Button
							text="add to cart"
							className="bg-primary text-white hover:bg-secondary py-3.5 w-full"
						/>
						<Button text="buy now" className="py-3.5 w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
