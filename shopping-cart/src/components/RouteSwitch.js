import React from "react";
import "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Homepage from "./Homepage";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ShopData from "./ShopData";
import Footer from "./Footer";

export default function RouteSwitch() {
	const [shoeCart, setShoeCart] = React.useState([]);

	const fullPrice = shoeCart.map((prices) => {
		return prices.price;
	});

	let totalPrice = 0;
	fullPrice.forEach((num) => {
		totalPrice += num;
	});

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
				className={"item-container"}
			/>
		);
	});

	return (
		<div>
			<HashRouter>
				<Navbar />
				<Routes>
					<Route path="/homepage" element={<Homepage />} />
					<Route path="/shop" element={shopItems} />
					<Route path="/cart" element={cartItems} />
				</Routes>
				<Footer fullPrice={totalPrice} />
			</HashRouter>
		</div>
	);
}
