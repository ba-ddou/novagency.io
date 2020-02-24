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
import img from 'app/assets/images/xdesign.jpg';
import apple from 'app/assets/images/apple.svg'

const CarouselControls = ({next,prev}) => {
    return (
        <div id="carouselControls">
            <div id="carouselControls-left" onClick={prev}>
                {/* <ArrowSpinningBtn direction="back" /> */}
                {/* This components render a spinning img from the images source passed to it */}
                <SvgSpinningBtn spin={img} fix={apple} />

            </div>
            <div id="carouselControls-right" onClick={next}>
                {/* <ArrowSpinningBtn direction="forward" /> */}
                <SvgSpinningBtn spin={img} fix={apple} />
            </div>

        </div>
    );
}

export default CarouselControls;