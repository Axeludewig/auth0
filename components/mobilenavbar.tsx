"use client";
import React, { useState } from "react";
import { Drawer, ImageList } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Login from "./login";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Mobilenavbar() {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(true);
	}

	function handleClose() {
		setIsOpen(false);
	}

	return (
		<div>
			<nav className="fixed top-0 left-0 md:hidden w-full">
				<div className="bg-purple-200 p-2 flex justify-between">
					<div
						className="p-2 w-10"
						onClick={handleClick}
					>
						<MenuIcon />
					</div>
					<div className="p-2 flex gap-6">
						<div>
							<PersonIcon />
						</div>
						<div>
							<ShoppingCartIcon />
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

export default Mobilenavbar;
