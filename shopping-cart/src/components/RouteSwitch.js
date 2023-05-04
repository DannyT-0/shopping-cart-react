import React from "react";
import "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Homepage from "./Homepage";
import Cart from "./Cart";
import Navbar from "./Navbar";

export default function RouteSwitch() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/homepage" element={<Homepage />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
