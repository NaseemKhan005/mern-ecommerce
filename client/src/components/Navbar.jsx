import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

import Button from "./common/Button";
import { navLinks } from "../constants/navlinks";
import { useState } from "react";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const pathname = useLocation().pathname;

	return (
		<div className="w-full border-b">
			<div className="container px-5 md:px-10 mx-auto py-3">
				<div className="relative flex gap-2 sm:gap-5 md:gap-0 md:items-center justify-between">
					<Link to="/">
						<h2 className="text-[1.6rem] md:text-2xl font-semibold text-primary">
							Epic Store.
						</h2>
					</Link>

					<ul
						className={`flex md:items-center md:relative fixed bg-white w-80 shadow-lg md:w-auto h-screen md:h-auto md:shadow-none top-0 z-10 flex-col md:flex-row md:gap-5 lg:gap-10 capitalize pt-32 gap-6 px-5 md:px-0 transition-all duration-500 md:pt-0 ${
							menu ? "right-0" : "-right-full md:right-0"
						}`}
					>
						{navLinks.map((link) => (
							<li key={link.id}>
								<Link
									to={link.link}
									onClick={() => setMenu(false)}
									className={`hover:text-primary md:hover:underline underline-offset-4 decoration-2 md:border-none block w-full md:w-fit border-b hover:border-primary pb-2 md:p-0 ${
										link.link === pathname
											? "text-primary md:underline border-b-[1.5px] border-primary"
											: ""
									}`}
								>
									{link.title}
								</Link>
							</li>
						))}
						<span
							onClick={() => setMenu(false)}
							className="md:hidden absolute top-5 text-2xl hover:bg-black/10 bg-black/5 p-2 rounded-full cursor-pointer"
						>
							<IoClose />
						</span>

						<div className="flex flex-col gap-2 mt-10">
							<Link to="/login">
								<Button text="Login" className="w-full sm:hidden" />
							</Link>
							<Link to="/register">
								<Button
									text="Register"
									className="bg-primary text-white hover:bg-secondary w-full sm:hidden"
								/>
							</Link>
						</div>
					</ul>

					<div className="flex items-center gap-3">
						<Link to="/login">
							<Button text="Login" className="w-full sm:block hidden" />
						</Link>
						<Link to="/register">
							<Button
								text="Register"
								className="bg-primary text-white hover:bg-secondary w-full sm:block hidden"
							/>
						</Link>
						<Link to="/cart">
							<button className="relative hover:bg-primary/10 -ml-2 p-2.5 rounded-full text-2xl">
								<span className="absolute text-xs flex items-center justify-center bg-primary text-white top-0 right-0 font-medium rounded-full w-5 aspect-square">
									0
								</span>
								<AiOutlineShoppingCart />
							</button>
						</Link>

						<span
							onClick={() => setMenu(true)}
							className="md:hidden text-2xl hover:bg-black/10 bg-black/5 p-2 rounded-full cursor-pointer"
						>
							<FiMenu />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
