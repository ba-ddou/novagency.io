/*
 *
 * Generic SpinningBtn
 *
 *
 */

import React from "react";
import { observer, inject } from "mobx-react";
import "./styles.sass";
import { motion, useAnimation } from "framer-motion";

const SpinWrapper = props => {
	return (
		<motion.div
			className="spinWrapper"
			animate={{ rotate: 360 }}
			transition={{
				duration: 7,
				ease: "linear",
				loop: Infinity
			}}>
			{props.children}
		</motion.div>
	);
};

// all SpinningBtns need a spin prop, which is an svg src
// all SpinningBtns either need to receive a fix or a text prop
// fix is an svg src, and text is a string
// fix and text are the SpinningBtn's center static parts
export const SvgSpinningBtn = inject("viewStore")(
	observer(({ spinEn, spinFr, fix, text, viewStore }) => {
		let language = viewStore.language;
		return (
			<div className="svgSpinningBtn">
				<SpinWrapper>
					<img
						className="svgSpin"
						src={language == "en" ? spinEn : spinFr}
					/>
				</SpinWrapper>
				{fix && <img src={fix} />}
				{text && <span>{text}</span>}
			</div>
		);
	})
);
