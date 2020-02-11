/*
*
* Project Slide
*
*
*/

import React from 'react';
import './styles.scss'
import {toJS} from 'mobx'
import thumb from 'app/assets/images/xdesign.jpg'

// {JSON.stringify(toJS(data))}

const ProjectSlide = ({data}) => {
    return (
        <div key={data.title} className="projectSlide">
            <div className="projectSlide-thumbnail">
                <img src={thumb} />
            </div>
            <div className="projectSlide-info">
                {data.title}
            </div>
        </div>
    );
}

export default ProjectSlide;