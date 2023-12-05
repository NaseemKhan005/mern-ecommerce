import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const Login = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [showArrow, setShowArrow] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	const isFormValid =
		formData.firstName.trim() !== "" &&
		formData.lastName.trim() !== "" &&
		formData.username.trim() !== "" &&
		formData.email.trim() !== "" &&
		formData.password.trim() !== "" &&
		formData.confirmPassword.trim() !== "";

	return (
		<div className="fixed top-0 left-0 bg-[url('/assets/register-bg.jpg')] bg-cover bg-bottom w-full min-h-screen h-full flex items-center justify-center select-none">
			<div className="md:container md:mx-auto md:px-10 md:py-16 before:absolute before:top-0 before:left-0 before:w-full before:min-h-screen before:h-full before:bg-black/20 before:-z-10">
				<div className="flex items-center justify-center md:px-6 md:py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-screen sm:w-full h-screen sm:h-fit pt-12 sm:pt-0 bg-white sm:rounded-lg shadow dark:border md:mt-0 md:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-4 sm:p-6 space-y-4 md:space-y-6 md:p-8 ">
							<h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Create an account
							</h1>
							<form className="space-y-4 md:space-y-6 w-full" action="#">
								<div className="flex items-start gap-2 md:gap-3">
									<div className="w-full flex flex-col gap-3 md:gap-5">
										<div>
											<label
												htmlFor="firstName"
												className="block mb-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-white"
											>
												Your firstname
											</label>
											<input
												type="text"
												name="firstName"
												id="firstName"
												placeholder="Firstname"
												value={formData.firstName}
												onChange={handleInputChange}
												className="px-4 py-3.5 bg-gray-50 border-[1.4px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary outline-none focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="block mb-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-white"
											>
												Your email
											</label>
											<input
												type="email"
												name="email"
												id="email"
												placeholder="Email"
												value={formData.email}
												onChange={handleInputChange}
												className="px-4 py-3.5 bg-gray-50 border-[1.4px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary outline-none focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
											/>
										</div>
										<div className="relative">
											<label
												htmlFor="password"
												className="block mb-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-white"
											>
												Password
											</label>
											<input
												type={showPassword ? "text" : "password"}
												name="password"
												id="password"
												placeholder="Password"
												value={formData.password}
												onChange={handleInputChange}
												className="px-4 pr-9 py-3.5 bg-gray-50 border-[1.4px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary outline-none focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
											/>
											{showPassword ? (
												<span
													className="text-lg p-2 text-black/70 dark:text-white hover:bg-primary/10 rounded-full cursor-pointer absolute top-[69%] -translate-y-1/2 right-2 hover:text-primary"
													onClick={() => setShowPassword(false)}
												>
													<AiOutlineEye />
												</span>
											) : (
												<span
													className="text-lg p-2 text-black/30 dark:text-white/50 hover:bg-primary/10 rounded-full cursor-pointer absolute top-[69%] -translate-y-1/2 right-2 hover:text-primary"
													onClick={() => setShowPassword(true)}
												>
													<AiOutlineEyeInvisible />
												</span>
											)}
										</div>
									</div>

									<div className="w-full flex flex-col gap-3 md:gap-5">
										<div>
											<label
												htmlFor="lastName"
												className="block mb-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-white"
											>
												Your lastname
											</label>
											<input
												type="text"
												name="lastName"
												id="lastName"
												placeholder="Lastname"
												value={formData.lastName}
												onChange={handleInputChange}
												className="px-4 py-3.5 bg-gray-50 border-[1.4px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary outline-none focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
											/>
										</div>
										<div>
											<label
												htmlFor="username"
												className="block mb-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-white"
											>
												Your username
											</label>
											<input
												type="text"
												name="username"
												id="username"
												placeholder="Username"
												value={formData.username}
												onChange={handleInputChange}
												className="px-4 py-3.5 bg-gray-50 border-[1.4px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary outline-none focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
											/>
										</div>
										<div className="relative">
											<label
												htmlFor="confirmPassword"
												className="block mb-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-white"
											>
												Confirm password
											</label>
											<input
												type={showConfirmPassword ? "text" : "password"}
												name="confirmPassword"
												id="confirmPassword"
												placeholder="Confirm Password"
												value={formData.confirmPassword}
												onChange={handleInputChange}
												className="px-4 pr-9 py-3.5 bg-gray-50 border-[1.4px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary outline-none focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
											/>
											{showConfirmPassword ? (
												<span
													className="text-lg p-2 text-black/70 dark:text-white hover:bg-primary/10 rounded-full cursor-pointer absolute top-[69%] -translate-y-1/2 right-2 hover:text-primary"
													onClick={() => setShowConfirmPassword(false)}
												>
													<AiOutlineEye />
												</span>
											) : (
												<span
													className="text-lg p-2 text-black/30 dark:text-white/50 hover:bg-primary/10 rounded-full cursor-pointer absolute top-[69%] -translate-y-1/2 right-2 hover:text-primary"
													onClick={() => setShowConfirmPassword(true)}
												>
													<AiOutlineEyeInvisible />
												</span>
											)}
										</div>
									</div>
								</div>
								<div className="flex items-center gap-1">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="remember"
												aria-describedby="remember"
												type="checkbox"
												className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
											/>
										</div>
										<div className="ml-3 text-sm">
											<label
												htmlFor="remember"
												className="text-gray-500 dark:text-gray-300"
											>
												I accept the
											</label>
										</div>
									</div>
									<a
										href="#"
										className="text-sm font-medium text-primary hover:underline dark:text-primary-500"
									>
										Terms and Conditions
									</a>
								</div>
								<button
									type="submit"
									onMouseEnter={() => setShowArrow(true)}
									onMouseLeave={() => setShowArrow(false)}
									onSubmit={handleFormSubmit}
									disabled={!isFormValid}
									className="w-full flex disabled:opacity-70 disabled:text-white/80 disabled:cursor-not-allowed items-center justify-center text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center dark:bg-primary relative dark:hover:bg-primary dark:focus:ring-primary transition-all duration-500"
								>
									<span
										className={`${
											showArrow
												? "w-40 transition-all duration-500"
												: "w-full transition-all duration-500 ml-4"
										}`}
									>
										Create an account
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
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{" "}
									<a
										href="/login"
										className="font-medium text-primary hover:underline dark:text-primary-500"
									>
										Login here
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
