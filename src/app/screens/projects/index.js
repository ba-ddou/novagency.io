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
import Project from 'app/screens/project'

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
                <Route exact path={`${path}/:projectName`} >
                    <Project />
                </Route>
            </BrowserRouter>

        </div >
    );
}

export default Projects;


