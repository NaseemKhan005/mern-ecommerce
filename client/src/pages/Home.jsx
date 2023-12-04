import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProduct from "../components/FeaturedProduct";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
			<Hero />
			<Categories />
			<FeaturedProduct />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Home;