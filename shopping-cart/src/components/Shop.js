import React from "react";
import ShopData from "./ShopData";

export default function Shop(props) {
	const shopItems = ShopData.map((item) => {
		console.log(item);
		return (
			<div>
				<div>
					<div className="item-block">
						<img
							className="shopping-cart-item"
							src={item.imgSource}
							alt={item.altText}
							onClick={props.handleClick}
						/>
						<p>${item.price}</p>
						<button onClick={props.handleClick}>Add to Cart</button>
					</div>
				</div>
			</div>
		);
	});

	return <div className="item-container">{shopItems}</div>;
}
