"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
	return (
		<div>
			<nav className="fixed top-0 md:hidden">
				<div className="">
					<MenuIcon />
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
