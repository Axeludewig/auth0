"use client";
import React, { useState } from "react";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
				<div
					className="bg-purple-200 p-2"
					onClick={handleClick}
				>
					<MenuIcon />
				</div>
			</nav>

			<Drawer
				anchor="left"
				open={isOpen}
				onClose={handleClose}
			>
				{/* Drawer contents */}
				<div className="p-4">
					<ul className="w-[200px]">
						<li>Login</li>
						<li>Tienda</li>
						<li>Blog</li>
						<li>Bio</li>
						<li>Contacto</li>
					</ul>
				</div>
			</Drawer>

			{isOpen && (
				<div
					className="fixed top-0 right-0 p-2 cursor-pointer"
					onClick={handleClose}
					style={{ color: "black" }}
				>
					<CloseIcon />
				</div>
			)}
		</div>
	);
}

export default Mobilenavbar;