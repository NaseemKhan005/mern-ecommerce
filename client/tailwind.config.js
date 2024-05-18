/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				clicker_script: ["Clicker Script", "cursive"],
			},
			colors: {
				primary: "#FF4400",
				secondary: "#FF3000",
			},
		},
	},
	plugins: [],
};
