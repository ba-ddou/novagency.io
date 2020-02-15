/*
*
*
* Project page
*
*/


import React from 'react';
import { useParams } from 'react-router-dom';
import { inject } from 'mobx-react';
import {toJS} from 'mobx'
import ProjectsNavBar from './components/ProjectsNavBar'
import ProjectControls from './components/ProjectControls'

const Project = inject('modelStore')(
    (props) => {
        let { projectName } = useParams();
        let project = props.modelStore.getProject(projectName);
        return (
            <div id="projectPage">
                <ProjectsNavBar />
                <div className="projectPage-info">
                    <div className="projectPage-info-services">
                        {project[0].services.map(
                            (service,index)=><span key={index} className="projectPage-info-service" >{service}</span>
                        )}
                    </div>
                        <div className="projectPage-info-description">{project[0].description}</div>
                </div>
                <div className="projectPage-images">
                    {project[0].images.map(
                        image => <img className="projectPage-images-image" src={image.src} alt={image.alt} />
                    )}
                </div>
                <ProjectControls />
            </div>

        );
    }
);

export default Project;


