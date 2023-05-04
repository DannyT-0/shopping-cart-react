import "./App.css";
// import Homepage from "./components/Homepage";
// import Navbar from "./components/Navbar";
// import Shop from "./components/Shop";
// import Cart from "./components/Cart";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
	function testClick() {
		setCartStatus();
	}

	const [cartStatus, setCartStatus] = React.useState([]);
	console.log(cartStatus);

	// return (
	// 	<div>
	// 		<Navbar />
	// 		<BrowserRouter>
	// 			<Routes>
	// 				<Route path="/homepage" element={<Homepage />} />
	// 				<Route path="/shop" element={<Shop handleClick={testClick} />} />
	// 				<Route path="/cart" element={<Cart />} />
	// 			</Routes>
	// 		</BrowserRouter>
	// 	</div>
	// );
}

export default App;
