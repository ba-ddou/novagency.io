/*
*
*
*
*
*/

import React from 'react';
import './styles.scss'

const ProjectSlide = ({index}) => {
    return (
        <div key={index} className="projectSlide">
            <div className="projectSlide-thumbnail">{index}</div>
            <div className="projectSlide-info">
                `Info of Project #${index}`
            </div>
        </div>
    );
}

export default ProjectSlide;