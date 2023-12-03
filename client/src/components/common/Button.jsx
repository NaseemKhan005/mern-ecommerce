const Button = ({ text, className }) => {
	return (
		<button
			className={`capitalize bg-neutral-100 hover:bg-neutral-200/80 py-3 px-5 rounded-md text-sm ${className}`}
		>
			{text}
		</button>
	);
};

export default Button;
