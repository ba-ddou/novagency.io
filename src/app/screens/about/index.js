/*
*
* About page
*
*
*/

import React from 'react';
import './styles.sass'
import { Helmet } from 'react-helmet'



const About = () => {
    return (
        <div className="mainContent-page">
            <Helmet>
                <title>Nova - About</title>
            </Helmet>
            <h1 className="center-XY">novagency.io | About</h1>
        </div>
    );
}

export default About;