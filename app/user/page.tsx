"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

function User() {
	const { user, error, isLoading } = useUser();

	if (isLoading)
		return (
			<div className="flex items-center justify-center">
				<svg
					className="animate-spin h-8 w-8 text-gray-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					/>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			</div>
		);
	if (error) return <div>{error.message}</div>;

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<div className="border-2 border-slate-600 p-12 rounded shadow-xl flex flex-col items-center justify-center">
					{user?.picture ? (
						<div className="overflow-hidden rounded-full content-stretch mx-auto md:mb-8 mb-8">
							<img
								src={user?.picture}
								alt={user?.name}
								width="100"
								height="100"
								className="rounded-full border-2 border-slate-600 "
							/>
						</div>
					) : (
						""
					)}
					<div className="overflow-hidden text-sm md:text-base">
						<h2>
							<span className="font-semibold">Nombre:</span>{" "}
							{user?.name}
						</h2>
					</div>
					<div className="overflow-hidden text-sm md:text-base">
						<p>
							<span className="font-semibold">Email:</span>{" "}
							{user?.email}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default User;
