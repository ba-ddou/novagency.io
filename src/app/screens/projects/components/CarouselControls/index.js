/*
*
* Carousel Floating Controls
* Sits on top of the ProjectsCarousel and calls the next and previous handlers on user click
*
*/


import React from 'react';
import './styles.scss'
// Import the Arrow Spinning Button from the SpinningBtn package
import { ArrowSpinningBtn } from 'app/components/SpinningBtn';

const CarouselControls = () => {
    return (
        <div id="carouselControls">
            <div id="carouselControls-left">
                <ArrowSpinningBtn direction="back" />
            </div>
            <div id="carouselControls-right">
                <ArrowSpinningBtn direction="forward" />
            </div>

        </div>
    );
}

export default CarouselControls;