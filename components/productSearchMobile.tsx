import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function ProductSearchMobile() {
	return (
		<div className="flex items-center">
			{" "}
			{/* Added items-center class */}
			<input
				id="search"
				type="search"
				className="text-sm p-2 rounded-full border-2 border-slate-600 w-[200px]"
				placeholder="Buscar productos ..."
			/>
			<div className="rounded-full h-10 w-10 text-slate-600 flex items-center justify-center active:bg-black active:text-white -ml-10">
				{" "}
				{/* Added items-center and justify-center classes */}
				<SearchIcon className="active:text-white" />
			</div>
		</div>
	);
}

export default ProductSearchMobile;
