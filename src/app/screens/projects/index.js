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
    let { path, url } = useRouteMatch();
    return (
        <div id="projectsPage" className="mainContent-page">
            <BrowserRouter>
                <Route exact path={path} >
                    <ProjectsCarousel />
                </Route>
                <Route path={`${url}/:projectName`} >
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