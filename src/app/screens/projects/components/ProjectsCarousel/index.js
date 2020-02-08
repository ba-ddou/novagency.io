/*
*
* ProjectCarousel
*
*
*/


import React, { Component } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.scss';
import CarouselControls from '../CarouselControls'
import ProjectSlide from '../ProjectSlide'
export default class ProjectsCarousel extends Component {

    // Slick Slider Settings
    settings = {
        className: "slider variable-width",
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false
    };

    render() {
        return (
            <div id="projectsCarousel">

                    <Slider {...this.settings}>
                        {[1, 2, 3, 4, 5, 6].map((data,index) => (
                            <ProjectSlide key={index} index={index} />
                        ))}
                    </Slider>
                    <CarouselControls />

                
            </div>
        );
    }
}

