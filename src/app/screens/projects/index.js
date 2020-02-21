/*
*
*
* Projects page main component
*
*/



import React, { useEffect } from 'react';
import './styles.sass'
import { BrowserRouter, Route, useParams, useRouteMatch } from 'react-router-dom';
import ProjectsCarousel from './components/ProjectsCarousel'
import Project from 'app/screens/project'
import { inject } from 'mobx-react'


const Projects = inject('services', 'modelStore')(({ services, modelStore }) => {
    // get the current Route's path
    let { path } = useRouteMatch();

    useEffect(_ => {
        let run = async _ => {
            let projects = await services.getProjects();
            console.log(projects);
            modelStore.projects = projects;
        };
        run();
    });
    
    
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
});

export default Projects;


