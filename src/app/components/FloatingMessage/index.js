/*
 *
 *
 * a floating message for form submition feedback
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom";
import "./styles.sass";

const FloatingMessage = ({ content }) => {
	return ReactDOM.createPortal(
		<div
			className={
				content.type == "success"
					? "floatingMessage floatingMessage-success"
					: "floatingMessage floatingMessage-error"
			}>
			<span>{content.text}</span>
		</div>,
		document.getElementById("root")
	);
};

export default FloatingMessage;
