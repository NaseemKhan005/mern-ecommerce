import Annoucement from "./components/Annoucement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import Cart from "./pages/Cart";

const App = () => {
	return (
		<div>
			<Annoucement />
			<Navbar />
			<Cart />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default App;
