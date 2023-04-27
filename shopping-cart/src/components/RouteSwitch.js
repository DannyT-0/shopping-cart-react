import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Shop";
import Homepage from "./Homepage";
import App from "../App";

export default function RouteSwitch() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/homepage" element={<Homepage />} />
				<Route path="/shop" element={<Shop />} />
			</Routes>
		</BrowserRouter>
	);
}
