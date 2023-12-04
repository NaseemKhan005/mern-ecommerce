import SingleProduct from "../components/common/SingleProduct";
import { products } from "../data";

const ProductList = () => {
	return (
		<div>
			<div className="container mx-auto px-5 md:px-10 py-16">
				<h2 className="text-3xl font-semibold">Dresses</h2>

				<div className="my-10 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
					<div className="flex items-center gap-2 capitalize">
						<h2 className="text-lg font-medium whitespace-nowrap">
							filter products:{" "}
						</h2>
						<select
							name="color"
							id="color"
							className="capitalize p-2 border rounded-md outline-none cursor-pointer w-full sm:w-fit"
						>
							<option value="white">white</option>
							<option value="black">black</option>
							<option value="red">red</option>
							<option value="blue">blue</option>
							<option value="green">green</option>
							<option value="yellow">yellow</option>
						</select>
						<select
							name="size"
							id="size"
							className="capitalize p-2 border rounded-md outline-none cursor-pointer w-full sm:w-fit"
						>
							<option value="s">s</option>
							<option value="m">m</option>
							<option value="l">l</option>
							<option value="xl">xl</option>
						</select>
					</div>
					<div className="flex items-center gap-2 capitalize">
						<h2 className="text-lg font-medium">price: </h2>
						<select
							name="price"
							id="price"
							className="capitalize p-2 border rounded-md outline-none cursor-pointer w-full sm:w-fit"
						>
							<option value="low to high">low to high</option>
							<option value="high to low">high to low</option>
						</select>
					</div>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 sm:gap-x-6 sm:gap-y-20 my-10">
					{products.map((product) => (
						<SingleProduct key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
