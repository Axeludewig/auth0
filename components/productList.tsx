"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

function ProductList() {
	const [products, setProducts] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const builder = imageUrlBuilder({
		projectId: "ag48fdc1", // Replace with your project ID
		dataset: "production", // Replace with your dataset name
	});
	const urlFor = (source: any) => {
		return builder.image(source);
	};
	const client = createClient({
		projectId: "ag48fdc1",
		dataset: "production",
		apiVersion: "2021-08-31",
		useCdn: true,
		// Add other configuration options if needed
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const query = `*[_type == "product"]{ _id, name, description, price, images }`;
				const products = await client.fetch(query);
				console.log(`Products:`, products);
				setIsLoading(false);
				setProducts(products);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="flex flex-col justify-center items-center text-center">
			<h1 className="mb-4">Lista de productos</h1>
			{products.map((product) => (
				<div
					className="p-4 border-2 "
					key={product._id}
				>
					<div>
						{product.images && (
							<div>
								{product.images.map((image: any) => (
									<img
										key={image.asset._id}
										src={urlFor(image.asset).url()}
										alt={product.title}
										width="150"
										height="150"
									/>
								))}
							</div>
						)}
						<h2 className="font-semibold text-xl">
							<span className="font-semibold text-xl">
								{product.name}
							</span>
						</h2>
						<p>{product.description}</p>
						<p className="font-semibold">${product.price} MXN</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default ProductList;