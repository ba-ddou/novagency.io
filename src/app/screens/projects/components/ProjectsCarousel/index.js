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
import {inject} from 'mobx-react'

@inject('modelStore')
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
                        {this.props.modelStore.projects.map((data,index) => (
                            <ProjectSlide key={index} data={data} />
                        ))}
                    </Slider>
                    <CarouselControls />

                
            </div>
        );
    }
}

