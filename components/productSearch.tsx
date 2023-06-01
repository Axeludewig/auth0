import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function ProductSearch() {
	return (
		<div className="flex items-center">
			{" "}
			{/* Added items-center class */}
			<input
				id="search"
				type="search"
				className="text-sm p-2 rounded border-2 border-slate-600"
				placeholder="Buscar productos ..."
			/>
			<div className="rounded bg-slate-300 h-10 w-10 border-2 border-slate-600 flex items-center justify-center active:bg-black active:text-white">
				{" "}
				{/* Added items-center and justify-center classes */}
				<SearchIcon />
			</div>
		</div>
	);
}

export default ProductSearch;
