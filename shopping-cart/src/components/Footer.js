import React from "react";

export default function Footer(props) {
	return (
		<div className="footer">
			<p>Total Amount:${props.fullPrice}</p>
		</div>
	);
}
