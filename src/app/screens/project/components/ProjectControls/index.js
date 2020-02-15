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
import { inject } from 'mobx-react';


const ProjectControls = inject('modelStore')((props) => {
    let projectsNames = props.modelStore.projectsNames;
    let { projectName } = useParams();
    
    return (
        <div id="projectControls">

        </div>
    );
})

export default ProjectControls;