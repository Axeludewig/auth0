"use client";
import React, { Suspense, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCartIcon } from "lucide-react";
import ProductSearch from "./productSearch";
import Login from "./login";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer/Drawer";
import UserIconLogin from "./userIconLogin";
import Loading from "./loading";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(true);
	}

	function handleClose() {
		setIsOpen(false);
	}

	return (
		<div className="hidden md:block border-b border-slate-600">
			<nav className=" top-0 hidden md:block left-0 w-full min-w-screen h-16 bg-purple-200 border-b border-slate-600">
				<div className="bg-purple-200 p-2 flex justify-between">
					<div className="p-2 my-auto active:text-slate-600 flex">
						<Suspense fallback={<Loading />}>
							<div
								className="p-2 w-10 mr-12"
								onClick={handleClick}
							>
								<MenuIcon className="w-8 h-8" />
							</div>
							<a
								href="/"
								className="flex"
							>
								<img
									width={65}
									height={50}
									src="https://cdn.sanity.io/images/ag48fdc1/production/33a31d298187e4a76907172e345287b702fbcf60-6541x3894.png"
									className="h-8 mr-3 my-auto"
									alt="Renzahuer Goth logo"
								/>
								<p className="font-extrabold robotoTitle my-auto">
									RenzahuerGoth.com
								</p>
							</a>
						</Suspense>
					</div>
					<div className="p-2 my-auto">
						<Suspense fallback={<Loading />}>
							<ProductSearch />
						</Suspense>
					</div>
					<div className="p-2 flex gap-6 my-auto active:text-slate-600">
						<div>
							<UserIconLogin />
						</div>
						<div>
							<ShoppingCartIcon className="w-8 h-8" />
						</div>
					</div>
				</div>
			</nav>
			<Drawer
				anchor="left"
				open={isOpen}
				onClose={handleClose}
			>
				{/* Drawer contents */}
				<div className="p-4">
					<ul className="w-[200px] flex flex-col gap-4">
						<div>
							<a href="/">
								<img
									width={65}
									height={50}
									src="https://cdn.sanity.io/images/ag48fdc1/production/33a31d298187e4a76907172e345287b702fbcf60-6541x3894.png"
									className="h-8 mr-3"
									alt="Renzahuer Goth logo"
								/>
							</a>
						</div>
						<li>
							<Login />
						</li>
						<li>Tienda</li>
						<li>Blog</li>
						<li>Bio</li>
						<li>Contacto</li>
					</ul>
				</div>
			</Drawer>

			{isOpen && (
				<div
					className="fixed top-3 right-5 p-2 cursor-pointer"
					onClick={handleClose}
					style={{ color: "black" }}
				>
					<CloseIcon className="w-24 h-24" />
				</div>
			)}
		</div>
	);
}

export default Navbar;
