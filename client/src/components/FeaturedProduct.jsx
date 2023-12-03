import Title from "./common/Title";
import SingleProduct from "./common/SingleProduct";
import { products } from "../data/index";

const FeaturedProduct = () => {
	return (
		<div className="container mx-auto px-5 md:px-10 py-10">
			<Title title="featured products" />
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 sm:gap-x-6 sm:gap-y-20">
				{products.slice(0, 12).map((product) => (
					<SingleProduct key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProduct;
