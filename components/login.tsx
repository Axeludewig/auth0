"use client";

import { getSession } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import React from "react";

function Login() {
	const { user, error, isLoading } = useUser();

	if (isLoading)
		return (
			<div className="animate-bounce">
				<HourglassBottomIcon />
			</div>
		);
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<div className="flex flex-col gap-4">
				<p>Bienvenido, {user.name}! </p>
				<a href="/api/auth/logout">
					<button className="p-4 border border-black rounded-xl shadow-xl">
						Cerrar sesión
					</button>
				</a>
			</div>
		);
	}

	return (
		<a href="/api/auth/login">
			<button className="p-4 border border-black rounded-xl shadow-xl">
				Iniciar sesión
			</button>
		</a>
	);
}

export default Login;
