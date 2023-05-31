import Image from "next/image";
import Profile from "../components/profile";
import Login from "../components/login";
import Navbar from "@/components/navbar";
import Mobilenavbar from "@/components/mobilenavbar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Mobilenavbar />
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<div>
					<Login />
				</div>
				<div>
					<Profile />
				</div>
			</div>
		</main>
	);
}
