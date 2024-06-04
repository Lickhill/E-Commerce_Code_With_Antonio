import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
	const billboard = await getBillboard(
		"7b98de26-6ac3-41a9-b876-49abe54f5cd5"
	);

	const products = await getProducts({ isFeatured: true });
	return (
		<Container>
			<div className="pb-10 space-y-10">
				<Billboard data={billboard} />
				<div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
					<ProductList title="Featured Products" items={products} />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
