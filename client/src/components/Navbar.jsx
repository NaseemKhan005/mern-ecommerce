import { LuSearch } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Button from "./common/Button";

const Navbar = () => {
	return (
		<div className="w-full border-b">
			<div className="container px-5 md:px-10 mx-auto py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div>EN</div>
						<div className="relative">
							<span className="absolute top-1/2 left-3 -translate-y-1/2 text-lg">
								<LuSearch />
							</span>
							<input
								type="search"
								name="search"
								placeholder="Search here..."
								className="text-sm outline-none border py-2.5 rounded-full w-72 pl-9 pr-3"
							/>
						</div>
					</div>
					<div className="text-center">
						<h2 className="text-2xl -ml-10 font-semibold text-primary">
							Epic Store.
						</h2>
					</div>
					<div className="flex items-center gap-3">
						<Button text="Login" />
						<Button
							text="Register"
							className="bg-primary text-white hover:bg-secondary"
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
