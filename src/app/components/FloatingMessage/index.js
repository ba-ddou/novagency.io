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
			
			<span><i className={
				content.type == "success"
					? "icon ion-ios-checkmark-circle-filled"
					: "icon ion-ios-close-circle-filled"
			}></i>{content.text}</span>
		</div>,
		document.getElementById("root")
	);
};

export default FloatingMessage;

<ion-icon name="checkmark-circle"></ion-icon>