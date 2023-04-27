import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/homepage" element={<Homepage />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
