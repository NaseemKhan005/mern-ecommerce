import { IoMdSend } from "react-icons/io";

const NewsLetter = () => {
	return (
		<div className="w-full bg-black/90 text-white text-center my-16 sm:my-20">
			<div className="container mx-auto px-5 md:px-10 py-16 sm:py-20 md:py-28 flex flex-col gap-5 md:gap-3 items-center justify-center">
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-5">
					Newletter
				</h2>
				<p className="sm:text-lg sm:font-light">
					Get timely updates from your favourite products.
				</p>
				<div className="flex gap-1 flex-col sm:flex-row w-full justify-center">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your email"
						className="outline-none w-full sm:w-[28rem] rounded-md py-3 px-5 text-black focus:border-primary border-[1.4px] border-transparent"
					/>
					<button className="bg-white rounded-md hover:bg-primary hover:text-white p-3 text-black h-full flex items-center gap-1 justify-center">
						<span className="text-lg">Submit</span>
						<IoMdSend className="text-xl" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
