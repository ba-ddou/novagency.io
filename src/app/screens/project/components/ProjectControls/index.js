/*
*
*
* ProjectControls
*
*
*
*/

import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.sass'
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { SvgSpinningBtn } from 'app/components/SpinningBtn';
import nextP from 'app/assets/images/nextProject.svg';
import prevP from 'app/assets/images/prevProject.svg';


const ProjectControls = inject('modelStore')((props) => {
    let projectsNames = props.modelStore.projectsNames;
    let { projectName } = useParams();
    let currentProjectIndex = projectsNames.indexOf(projectName);

    let projectToLeft = currentProjectIndex == 0 ? projectsNames[projectsNames.length - 1]
        : projectsNames[currentProjectIndex - 1];

    let projectToRight = currentProjectIndex == projectsNames.length - 1 ? projectsNames[0]
        : projectsNames[currentProjectIndex + 1];

    return (
        <div className="projectControls">
            <div className="projectControls-left">
                <Link to={`/projects/${projectToLeft}`}>
                    <SvgSpinningBtn spin={prevP} text={projectToLeft} />
                </Link>
            </div>
            <div className="projectControls-right">
                <Link to={`/projects/${projectToRight}`}>
                    <SvgSpinningBtn spin={nextP} text={projectToRight} />
                </Link>
            </div>


        </div>
    );
})

export default ProjectControls;