import React from "react";
import homePageVans from "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/pics/homepagepic.webp";

export default function Homepage() {
	return (
		<div>
			<h1>The Not So Real Vans Shop</h1>
			<img src={homePageVans} alt="shoes" />
		</div>
	);
}
