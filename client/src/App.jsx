import Annoucement from "./components/Annoucement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import Product from "./pages/Product";

const App = () => {
	return (
		<div>
			<Annoucement />
			<Navbar />
			<Product />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default App;
