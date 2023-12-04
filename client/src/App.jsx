import Annoucement from "./components/Annoucement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import ProductList from "./pages/ProductList";

const App = () => {
	return (
		<div>
			<Navbar />
			<Annoucement />
			<ProductList />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default App;
