"use client";

import { getSession } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

function UserIconLogin() {
	const { user, error, isLoading } = useUser();

	if (isLoading) {
		return (
			<div className="p-2 my-auto mx-auto animate-bounce">
				<HourglassBottomIcon className="w-8 h-8 md:w-8 md:h-8" />
			</div>
		);
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			{user ? (
				<div>
					<a href="/user">
						<PersonIcon className="w-8 h-8 md:w-8 md:h-8" />
					</a>
				</div>
			) : (
				<div>
					<a href="https://auth0-gamma.vercel.app/api/auth/login">
						<PersonIcon className="w-8 h-8 md:w-8 md:h-8" />
					</a>
				</div>
			)}
		</div>
	);
}

export default UserIconLogin;
