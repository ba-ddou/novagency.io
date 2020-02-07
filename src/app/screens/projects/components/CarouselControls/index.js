


import React from 'react';
import './styles.scss'
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