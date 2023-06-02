"use client";
import React, { useState } from "react";
import { Drawer, ImageList } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Login from "./login";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserIconLogin from "./userIconLogin";
import ProductSearchMobile from "./productSearchMobile";
import FavoritesNav from "./favoritesNav";

function Mobilenavbar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(true);
	}

	function handleClose() {
		setIsOpen(false);
	}

	return (
		<div className="">
			<nav className="top-0 md:hidden w-full min-w-screen shadow-xl">
				<div className="bg-arelylle p-2 flex justify-between">
					<div className="p-2 flex gap-6">
						<div
							onClick={handleClick}
							className="my-auto"
						>
							<MenuIcon className="w-8 h-8" />
						</div>
						<div>
							<a href="/">
								<img
									width={100}
									height={85}
									src="https://cdn.sanity.io/images/ag48fdc1/production/33a31d298187e4a76907172e345287b702fbcf60-6541x3894.png"
									className="h-12 mr-3"
									alt="Renzahuer Goth logo"
								/>
							</a>
						</div>
					</div>

					<div className="p-2 flex gap-6 my-auto">
						<div>
							<UserIconLogin />
						</div>
						<div>
							<FavoritesNav />
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
									width={100}
									height={85}
									src="https://cdn.sanity.io/images/ag48fdc1/production/33a31d298187e4a76907172e345287b702fbcf60-6541x3894.png"
									className="h-12 mr-3"
									alt="Renzahuer Goth logo"
								/>
							</a>
						</div>
						<li>
							<Login />
						</li>
						<ProductSearchMobile />
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
					style={{ color: "white" }}
				>
					<CloseIcon className="w-24 h-24" />
				</div>
			)}
		</div>
	);
}

export default Mobilenavbar;
