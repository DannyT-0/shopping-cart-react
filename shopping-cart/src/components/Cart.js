import React from "react";

export default function Cart(props) {
	return (
		<div>
			<div className="item-block">
				<img
					className="shopping-cart-item"
					src={props.imgSource}
					alt={props.altText}
					onClick={props.handleClick}
					incart={props.incart}
				/>
				<p>${props.price}</p>
			</div>
		</div>
	);
}
