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
import {inject, observer} from 'mobx-react'



@inject('modelStore')
@observer
export default class ProjectsCarousel extends Component {

    // Slick Slider Settings
    settings = {
        className: "slider variable-width",
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        draggable : false
    };

    next = ()=>{
        this.slider.slickNext();
    }

    prev = ()=>{
        this.slider.slickPrev();
    }

    render() {
        return (
            <div id="projectsCarousel">
                    
                    <Slider {...this.settings} ref={element=>this.slider=element}>
                        {/* the projects data array from the model store
                            is mapped to projects slides*/}
                        {this.props.modelStore.projects.map((data,index) => (
                            <ProjectSlide key={index} data={data} />
                        ))}
                    </Slider>
                    {/* this is div that contains the slider next and prev buttons
                        it's absolutely positionned on top of the slider */}
                    <CarouselControls next={this.next}  prev={this.prev} />

                
            </div>
        );
    }
}

