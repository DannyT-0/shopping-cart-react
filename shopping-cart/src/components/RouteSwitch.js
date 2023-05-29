import React from "react";
import "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Homepage from "./Homepage";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ShopData from "./ShopData";
import Footer from "./Footer";

export default function RouteSwitch() {
	const [shoeCart, setShoeCart] = React.useState([]);
	console.log(shoeCart);

	// const fullPrice = shoeCart.map((prices) => {
	// 	console.log(prices.price);
	// });

	const cartItems = shoeCart.map((items) => {
		return (
			<Cart
				imgSource={items.imgSource}
				altText={items.altText}
				price={items.price}
				incart={items.incart}
			/>
		);
	});

	const shopItems = ShopData.map((items) => {
		function onClick() {
			setShoeCart((prevCart) => [...prevCart, items]);
		}

		return (
			<Shop
				imgSource={items.imgSource}
				altText={items.altText}
				handleClick={onClick}
				price={items.price}
				incart={items.incart}
			/>
		);
	});

	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/homepage" element={<Homepage />} />
					<Route path="/shop" element={shopItems} />
					<Route path="/cart" element={cartItems} />
				</Routes>
				{/* {fullPrice} */}
				<Footer />
			</BrowserRouter>
		</div>
	);
}
