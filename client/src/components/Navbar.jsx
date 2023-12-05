import { LuSearch } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Button from "./common/Button";

const Navbar = () => {
	return (
		<div className="w-full border-b">
			<div className="container px-5 md:px-10 mx-auto py-3">
				<div className="relative flex gap-2 sm:gap-5 md:gap-0 md:items-center flex-col md:flex-row justify-between">
					<div className="relative w-full order-3 md:order-1 md:w-64 lg:w-72">
						<span className="absolute top-1/2 left-3 -translate-y-1/2 text-lg">
							<LuSearch />
						</span>
						<input
							type="search"
							name="search"
							placeholder="Search here..."
							className="text-sm outline-none border py-2.5 rounded-full w-full pl-9 pr-3"
						/>
					</div>
					<div className="text-center sm:text-left md:text-center order-1">
						<h2 className="text-[1.6rem] md:text-2xl sm:mt-1 md:mt-0 lg:-ml-10 font-semibold text-primary">
							Epic Store.
						</h2>
					</div>
					<div className="flex items-center gap-3 order-2 sm:absolute md:relative top-0 right-0">
						<Button text="Login" className='w-full' />
						<Button
							text="Register"
							className="bg-primary text-white hover:bg-secondary w-full"
						/>
						<button className="relative hover:bg-primary/10 -ml-2 p-2.5 rounded-full text-2xl">
							<span className="absolute text-xs flex items-center justify-center bg-primary text-white top-0 right-0 font-medium rounded-full w-5 aspect-square">
								0
							</span>
							<AiOutlineShoppingCart />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
