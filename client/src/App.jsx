import Annoucement from "./components/Annoucement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import Login from "./pages/Login";

const App = () => {
	return (
		<div>
			<Annoucement />
			<Navbar />
			<Login />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default App;
