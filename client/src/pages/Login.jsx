import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [showArrow, setShowArrow] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	const isFormValid =
		formData.email.trim() !== "" && formData.password.trim() !== "";

	return (
		<div className="fixed top-0 left-0 bg-[url('/assets/bg.jpg')] bg-cover bg-center w-full h-screen flex items-center justify-center">
			<div className="container mx-auto px-5 md:px-10 py-16 before:absolute before:top-0 before:left-0 before:w-full before:h-screen before:bg-black/20 before:-z-10">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Sign in to your account
							</h1>
							<form className="space-y-4 md:space-y-6" action="#">
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
										className="px-4 py-3.5 bg-gray-50 border-[1.4px] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary outline-none focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
									/>
								</div>
								<div className="relative">
									<label
										htmlFor="password"
										className="block mb-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-white"
									>
										Your password
									</label>
									<input
										type={showPassword ? "text" : "password"}
										name="password"
										id="password"
										placeholder="Password"
										value={formData.password}
										onChange={handleInputChange}
										className="px-4 py-3.5 bg-gray-50 border-[1.4px] border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary outline-none focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
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
								<div className="flex items-center justify-between">
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
												Remember me
											</label>
										</div>
									</div>
									<a
										href="#"
										className="text-sm font-medium text-primary hover:underline dark:text-primary-500"
									>
										Forgot password?
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
												? "w-16 transition-all duration-500"
												: "w-full transition-all duration-500 ml-4"
										}`}
									>
										Sign in
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
									Don&apos;t have an account yet?{" "}
									<a
										href="/register"
										className="font-medium text-primary hover:underline dark:text-primary-500"
									>
										Sign up
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
