/*
*
* Carousel Floating Controls
* Sits on top of the ProjectsCarousel and calls the next and previous handlers on user click
*
*/


import React from 'react';
import './styles.sass'
// Import the Arrow Spinning Button from the SpinningBtn package
import { ArrowSpinningBtn , SvgSpinningBtn } from 'app/components/SpinningBtn';

// importing an image from the assets folder
// all SVGs should be imported this way
import preva from 'app/assets/images/leftArrow.svg';
import prevp from 'app/assets/images/prevProject.svg'
import nexta from 'app/assets/images/rightArrow.svg'
import nextp from 'app/assets/images/nextProject.svg'

const CarouselControls = ({next,prev}) => {
    return (
        <div className="carouselControls">
            <div className="carouselControls-left" onClick={prev}>
                {/* <ArrowSpinningBtn direction="back" /> */}
                {/* This components render a spinning img from the images source passed to it */}
                <SvgSpinningBtn spin={prevp} fix={preva} />

            </div>
            <div className="carouselControls-right" onClick={next}>
                {/* <ArrowSpinningBtn direction="forward" /> */}
                <SvgSpinningBtn spin={nextp} fix={nexta} />
            </div>

        </div>
    );
}

export default CarouselControls;