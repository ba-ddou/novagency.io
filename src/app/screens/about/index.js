/*
*
* About page
*
*
*/

import React from 'react';
import './styles.sass'
import { SvgSpinningBtn } from 'app/components/SpinningBtn'
import viewpb from 'app/assets/images/viewpb.svg'
import designill from 'app/assets/images/Design Illustration.svg'
import codeill from 'app/assets/images/Code Illustration.svg'



const About = () => {
    return (
        <div className="mainContent-page">
            <div className="mainContent-about">
                <div className="mainContent-description">
                    <h1>Digital Creative Agency</h1>
                    <p>Lectus quam id leo in vitae turpis massa sed. In eu mi bibendum neque. Aliquet enim tortor at auctor urna nunc id cursus metus. Sed vulputate odio ut enim blandit volutpat. Non blandit massa enim nec dui nunc. Ultricies tristique nulla aliquet enim. Consectetur a erat nam at lectus urna duis. Libero enim sed faucibus turpis in eu mi bibendum neque. Non pulvinar neque laoreet suspendisse. Enim nunc faucibus a </p>
                </div>
                <div className="mainContent-cta">
                    <SvgSpinningBtn spin={viewpb} text="" />
                </div>
                <div className="mainContent-design">
                    <p>Print / Logo Design / Visual Identity / UI / Whatever</p>
                    <img src={designill} alt=""></img>
                </div>
                <div className="mainContent-code">
                    <p>Back-end Development / Front-end / Development / Wordpress </p>
                    <img src={codeill} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default About;