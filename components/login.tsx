"use client";

import { getSession } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";

import React from "react";

function Login() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<div>
				Bienvenido, {user.name}!{" "}
				<a href="/api/auth/logout">
					<button className="p-4 border border-black rounded-xl">
						Cerrar sesión
					</button>
				</a>
			</div>
		);
	}

	return (
		<a href="/api/auth/login">
			<button className="p-4 border border-black rounded-xl">
				Iniciar sesión
			</button>
		</a>
	);
}

export default Login;
