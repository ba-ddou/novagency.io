/*
*
*
* Project page
*
*/


import React from 'react';
import { useParams } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx'
import ProjectsNavBar from './components/ProjectsNavBar'
import ProjectControls from './components/ProjectControls'
import { SvgSpinningBtn } from 'app/components/SpinningBtn';
import devis from "app/assets/images/Devis-Button.svg";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import './styles.sass'
import bimg from "app/assets/images/Essential Stationery.png"


const Project = inject('modelStore')(observer(
    ({ modelStore }) => {
        let { projectName } = useParams();
        let project = modelStore.getProject(projectName);
        if (modelStore.projects.length > 0) return (
            <div className="projectPage">
                <Helmet>
                    <title>Nova - {projectName}</title>
                </Helmet>
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
                    {/* {project.images.map(
                        image => <img key={image.key} className="projectPage-images-image" src={image.src} alt={image.alt} />
                    )} */}
                    <img src={bimg} alt="branding"/>
                </div>
                <ProjectControls />
                <div className="projectPage-requestInquiry">
                    <div className="projectPage-requestInquiry-text"><span className="projectPage-requestInquiry-grayText">Et si notre prochaine fierté</span><br></br>c'était votre projet ?</div>
                    <Link to="/contact/">
                        <SvgSpinningBtn spin={devis} fix="" />
                    </Link>

                </div>
            </div>
        );
        else return false
    }
)
);

export default Project;


