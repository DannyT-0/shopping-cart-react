import React from "react";

export default function Shop(props) {
	return (
		<div>
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
					<button onClick={props.handleClick}>Add to Cart</button>
				</div>
			</div>
		</div>
	);
}
