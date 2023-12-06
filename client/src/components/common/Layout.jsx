import Navbar from "../Navbar";
import Footer from "../Footer";
import NewsLetter from "../NewsLetter";
import Annoucement from "../Annoucement";

const Layout = ({ children }) => {
	return (
		<div>
			<Annoucement />
			<Navbar />
			{children}
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Layout;
