/*
*
* Carousel Floating Controls
* Sits on top of the ProjectsCarousel and calls the next and previous handlers on user click
*
*/


import React from 'react';
import './styles.scss'
// Import the Arrow Spinning Button from the SpinningBtn package
import { ArrowSpinningBtn , SvgSpinningBtn } from 'app/components/SpinningBtn';
import img from 'app/assets/images/xdesign.jpg';

const CarouselControls = () => {
    return (
        <div id="carouselControls">
            <div id="carouselControls-left">
                {/* <ArrowSpinningBtn direction="back" /> */}
                <SvgSpinningBtn src={img} />
            </div>
            <div id="carouselControls-right">
                {/* <ArrowSpinningBtn direction="forward" /> */}
                <SvgSpinningBtn src={img} />
            </div>

        </div>
    );
}

export default CarouselControls;