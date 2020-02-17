/*
*
*
* Project page
*
*/


import React from 'react';
import { useParams } from 'react-router-dom';
import { inject } from 'mobx-react';
import { toJS } from 'mobx'
import ProjectsNavBar from './components/ProjectsNavBar'
import ProjectControls from './components/ProjectControls'
import { SvgSpinningBtn } from 'app/components/SpinningBtn';
import img from 'app/assets/images/xdesign.jpg';
import apple from 'app/assets/images/apple.svg';
import { Link } from 'react-router-dom';


const Project = inject('modelStore')(
    (props) => {
        let { projectName } = useParams();
        let project = props.modelStore.getProject(projectName);
        return (
            <div id="projectPage">
                <ProjectsNavBar />
                <div className="projectPage-info">
                    <div className="projectPage-info-services">
                        {project.services.map(
                            (service, index) => <span key={index} className="projectPage-info-service" >{service}</span>
                        )}
                    </div>
                    <div className="projectPage-info-description">{project.description}</div>
                </div>
                <div className="projectPage-images">
                    {project.images.map(
                        image => <img key={image.key} className="projectPage-images-image" src={image.src} alt={image.alt} />
                    )}
                </div>
                <ProjectControls />
                <div className="projectPage-requestInquiry">
                        <div className="projectPage-requestInquiry-text">Et si votre projet ?</div>
                        <Link to="/contact/">
                            <SvgSpinningBtn spin={img} fix={apple} />
                        </Link>
                        
                </div>
            </div>

        );
    }
);

export default Project;


