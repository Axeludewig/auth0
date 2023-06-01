import Image from "next/image";
import Profile from "../components/profile";
import Login from "../components/login";
import Navbar from "@/components/navbar";
import Mobilenavbar from "@/components/mobilenavbar";
import ProductList from "@/components/productList";

export default function Home() {
	return (
		<main className="">
			<ProductList />
		</main>
	);
}
