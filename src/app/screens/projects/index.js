/*
*
*
* Projects page main component
*
*/


import React from 'react';
import './styles.scss'
import { BrowserRouter, Route, useParams, useRouteMatch } from 'react-router-dom';
import ProjectsCarousel from './components/ProjectsCarousel'

const Projects = () => {
    // get the current Route's path
    let { path} = useRouteMatch();
    return (
        <div id="projectsPage" className="mainContent-page">
            <BrowserRouter>
                {/* Render the Projects carousel when the path matches the current route */}
                <Route exact path={path} >
                    <ProjectsCarousel />
                </Route>
                {/* Render a specific Project page */}
                <Route path={`${path}/:projectName`} >
                    <Project />
                </Route>
            </BrowserRouter>

        </div >
    );
}

export default Projects;


var Project = (props) => {
    let { projectName } = useParams();
    return <div><h3 className="center-XY">novagency.io | {projectName} </h3></div>
}