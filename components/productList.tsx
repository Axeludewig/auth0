"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

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

	if (isLoading) return (
		<div className="p-2 my-auto mx-auto animate-bounce ml-40 mt-40">
			<HourglassBottomIcon className="w-24 h-24 md:w-24 md:h-24" />
		</div>
	);

	return (
		<div className="flex flex-col justify-center items-center text-center gap-4">
			<div className="bg-gradient-to-r from-arelylle to-gris hover:from-purple-600 hover:to-purple-200 p-4 md:p-8 w-full">
				<h1 className="md:text-5xl text-3xl font-extrabold text-white fontPTSerif">
					NUEVO
				</h1>
			</div>

			{products.map((product) => (
				<div
					className="p-4 border-2 w-[250px] h-[270px] rounded border-grisclaro shadow-xl"
					key={product._id}
				>
					<div>
						{product.images && (
							<div className="flex flex-col justify-center items-center">
								{product.images.map((image: any) => (
									<img
										key={image.asset._id}
										src={urlFor(image.asset).url()}
										alt={product.title}
										width="150"
										height="150"
										className=""
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
					<div className="">
						<button className="border rounded p-2 border-slate-600 m-4 px-8 bg-gris text-white font-semibold">
							Comprar
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default ProductList;

