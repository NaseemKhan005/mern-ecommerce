import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Contact = () => {
	const [formData, setFormData] = useState({
		email: "",
		subject: "",
		message: "",
	});
	const [showArrow, setShowArrow] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const isFormValid =
		formData.email.trim() !== "" &&
		formData.subject.trim() !== "" &&
		formData.message.trim() !== "";

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="container px-5 md:px-10 mx-auto py-16">
			<div className="bg-white dark:bg-gray-900">
				<div className="mx-auto max-w-screen-md">
					<h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
						Contact Us
					</h2>
					<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg 2xl:text-xl">
						Got a technical issue? Want to send feedback about a beta feature?
						Need details about our Business plan? Let us know.
					</p>
					<form className="space-y-8" onSubmit={handleFormSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light`}
								placeholder="Enter your email"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								value={formData.subject}
								onChange={handleInputChange}
								className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light"
								placeholder="Let us know how we can help you"
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Your message
							</label>
							<textarea
								id="message"
								name="message"
								rows="6"
								value={formData.message}
								onChange={handleInputChange}
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light"
								placeholder="Leave a comment..."
								required
							></textarea>
						</div>
						<button
							type="submit"
							onMouseEnter={() => setShowArrow(true)}
							onMouseLeave={() => setShowArrow(false)}
							onSubmit={handleFormSubmit}
							disabled={!isFormValid}
							className="w-full md:w-48 flex disabled:opacity-70 disabled:text-white/80 disabled:cursor-not-allowed items-center justify-center text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-3.5 text-center dark:bg-primary relative dark:hover:bg-primary dark:focus:ring-primary transition-all duration-500"
						>
							<span
								className={`${
									showArrow
										? "w-32 transition-all duration-500"
										: "w-full transition-all duration-500 ml-4"
								}`}
							>
								Send message
							</span>
							<span
								className={`
											ml-auto text-2xl text-white transition-all duration-500
											${showArrow ? "scale-100 translate-x-0" : "scale-0 -translate-x-5"}
										`}
							>
								<BsArrowRightShort />
							</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
