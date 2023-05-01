import React from "react";
import blackWhiteCush from "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/pics/blackwhitecush.webp";
import checkSlipOn from "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/pics/Vans-Slip-On-Checkerboard-2019-Product.webp";
import glitterPink from "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/pics/glitterpink.jpeg";
import greyBlackLow from "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/pics/greyblacklow.jpeg";
import highTopBlack from "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/pics/hightopblack.jpg";
import redChecker from "/Users/danny/Desktop/the_odin_project/react-section/shopping-cart-react/shopping-cart/src/pics/redcheck.webp";

export default function Shop() {
	return (
		<div>
			<h1>Shop</h1>
			<div className="item-container">
				<img
					className="shopping-cart-item"
					src={blackWhiteCush}
					alt="blackwhiteCush"
				/>
				<img
					className="shopping-cart-item"
					src={checkSlipOn}
					alt="checkSlipOn"
				/>
				<img
					className="shopping-cart-item"
					src={glitterPink}
					alt="glitterPink"
				/>
				<img
					className="shopping-cart-item"
					src={greyBlackLow}
					alt="greyBlackLow"
				/>
				<img
					className="shopping-cart-item"
					src={highTopBlack}
					alt="highTopBlack"
				/>
				<img className="shopping-cart-item" src={redChecker} alt="redChecker" />
			</div>
		</div>
	);
}
