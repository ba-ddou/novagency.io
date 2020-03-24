/*
 *
 * Carousel Controls
 * calls the next and previous handlers on user click
 *
 */

import React from "react";
import "./styles.sass";
// Import the Arrow Spinning Button from the SpinningBtn package
import { ArrowSpinningBtn, SvgSpinningBtn } from "app/components/SpinningBtn";

// importing an image from the assets folder
// all SVGs should be imported this way
import preva from "app/assets/images/leftArrow.svg";
import prevp from "app/assets/images/prevProject.svg";
import nexta from "app/assets/images/rightArrow.svg";
import nextp from "app/assets/images/nextProject.svg";

const CarouselControls = ({ next, prev }) => {
	return (
		<div className="carouselControls">
			{/* previous project button */}
			<div className="carouselControls-left" onClick={prev}>
				{/* This components render a spinning img from the images source passed to it */}
				<SvgSpinningBtn spinEn={prevp} spinFr={prevp} fix={preva} />
			</div>
			{/* new project button */}
			<div className="carouselControls-right" onClick={next}>
				<SvgSpinningBtn spinEn={nextp} spinFr={nextp} fix={nexta} />
			</div>
		</div>
	);
};

export default CarouselControls;
