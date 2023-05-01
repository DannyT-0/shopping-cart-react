import React from "react";

export default function Navbar() {
	return (
		<div>
			<ul className="nav-bar">
				<li>
					<a href="/homepage">Homepage</a>
				</li>
				<li>
					<a href="/shop">Shop</a>
				</li>
				<li>
					<a href="/cart">Cart</a>
				</li>
			</ul>
		</div>
	);
}
