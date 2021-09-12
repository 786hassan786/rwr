import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to="/">
					<div className="navbar-brand">Movie App</div>
				</Link>
			</div>
		</nav>
	);
}
