import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Annoucement = () => {
	const [closeAnnoucement, setCloseAnnoucement] = useState(false);

	return (
		<div
			className={`p-1 text-white bg-black text-sm flex items-center justify-between ${
				closeAnnoucement ? "hidden" : ""
			}`}
		>
			<p className="text-center w-full">
				<span className="font-semibold">🔥Super Deal!</span> Free Shipping in
				Orders over <span className="font-semibold">$50</span>

				<button className="ml-2 capitalize font-medium underline underline-offset-4 decoration-2 text-orange-500 hover:tracking-wider transition-all duration-500">shop now</button>
			</p>
			<button
				onClick={() => setCloseAnnoucement(true)}
				className="rounded-full p-2 hover:bg-white/10 float-right text-xl cursor-pointer mr-4"
			>
				<IoClose />
			</button>
		</div>
	);
};

export default Annoucement;
