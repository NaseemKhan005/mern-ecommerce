import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";

import Button from "./Button";

const SingleProduct = ({ product }) => {
	const [showIcons, setShowIcons] = useState(false);

	const { img, name, price } = product;

	return (
		<div
			onMouseEnter={() => setShowIcons(true)}
			onMouseLeave={() => setShowIcons(false)}
			className="w-full relative"
		>
			<div className="w-full h-96 sm:h-[23rem] overflow-hidden relative">
				<img
					src={img}
					alt={name}
					className="w-full h-full object-cover object-top"
				/>
				<div
				className={`h-full w-full absolute top-0 left-0 bg-black/50 flex items-center justify-center gap-3 overflow-hidden transition-all duration-[.4s] ${
					showIcons ? "opacity-100 scale-100" : "opacity-0 scale-0"
				}`}
			>
				<span className="bg-white hover:text-primary p-2.5 text-xl rounded-full cursor-pointer">
					<MdOutlineShoppingCart />
				</span>
				<span className="bg-white hover:text-primary p-2.5 text-xl rounded-full cursor-pointer">
					<LuSearch />
				</span>
				<span className="bg-white hover:text-primary p-2.5 text-xl rounded-full cursor-pointer">
					<AiOutlineHeart />
				</span>
			</div>
			</div>

			<h3 className="capitalize text-lg font-semibold hover:text-primary cursor-pointer mt-3">
				{name}
			</h3>
			<p className="font-medium">${price}.00</p>
			<div className="flex items-center gap-2">
				<button className="mt-2 capitalize font-medium text-white bg-zinc-700 hover:bg-zinc-900 p-3 rounded-full w-full hover:tracking-wider flex items-center justify-center gap-1 transition-all duration-500 text-xs">
					<LiaShoppingBagSolid className="text-base" /> <span>shop now</span>
				</button>
				<button className="mt-2 capitalize font-medium text-white bg-zinc-700 hover:bg-zinc-900 p-3 rounded-full w-full flex items-center justify-center gap-1 hover:tracking-wider transition-all duration-500 text-xs">
					<MdOutlineShoppingCart className="text-base" />{" "}
					<span>add to cart</span>
				</button>
			</div>

			
		</div>
	);
};

export default SingleProduct;
