import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<ul className="nav-bar">
				<Link to={"/homepage"}>
					<li>HomePage</li>
				</Link>
				<Link to={"/shop"}>
					<li>Shop</li>
				</Link>
				<Link to={"/cart"}>
					<li>Cart</li>
				</Link>
			</ul>
		</div>
	);
}
