import Annoucement from "./components/Annoucement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import Register from "./pages/Register";

const App = () => {
	return (
		<div>
			<Annoucement />
			<Navbar />
			<Register />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default App;
