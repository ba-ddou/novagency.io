/*
*
* Project Slide
*
*
*/

import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom'
import { toJS } from 'mobx'
import thumb from 'app/assets/images/xdesign.jpg'

// {JSON.stringify(toJS(data))}

const ProjectSlide = ({ data }) => {
    return (
        <Link to={`/projects/${data.name}`}>
            <div key={data.name} className="projectSlide">
                <div className="projectSlide-thumbnail">
                    <img src={thumb} />
                </div>
                <div className="projectSlide-info">
                    <span className="projectSlide-info-name">{data.name}</span>
                    <span className="projectSlide-info-tagline">{data.tagline}</span>
                    <span className="projectSlide-info-services">{data.services.join(',')}</span>
                    
                </div>
            </div>
        </Link>

    );
}

export default ProjectSlide;