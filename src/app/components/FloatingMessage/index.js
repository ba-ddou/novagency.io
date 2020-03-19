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
	// FloatingMessage uses React Portals to always render in the root div
	return ReactDOM.createPortal(
		<div
			// renders two types to messages according to the content's type property
			className={
				content.type == "success"
					? "floatingMessage floatingMessage-success"
					: "floatingMessage floatingMessage-error"
			}>
			<span>
				<i
					className={
						content.type == "success"
							? "icon ion-ios-checkmark-circle-outline"
							: "icon ion-ios-close-circle-outline"
					}></i>
				{content.text}
			</span>
		</div>,
		document.getElementById("root")
	);
};

export default FloatingMessage;
