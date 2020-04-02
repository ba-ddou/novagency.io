/*
 *
 *
 * Projects page main component
 *
 */

import React, { useEffect } from "react";
import "./styles.sass";
import {
	BrowserRouter,
	Route,
	useParams,
	Redirect,
	useRouteMatch
} from "react-router-dom";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Project from "app/screens/project";
import { inject } from "mobx-react";
import { Helmet } from "react-helmet";

const Projects = inject("modelStore")(({ modelStore }) => {
	// get the current Route's path
	let { path } = useRouteMatch();
	useEffect(() => {
		document.getElementsByClassName('slick-slide')[0].focus();
		console.log('focused');
	},[])
	return (
		<div id="projectsPage" className="mainContent-page">
			{/* all page specific HTML meta data goes inside Helmet*/}
			<Helmet>
				<title>Nova - Projects</title>
			</Helmet>
			{/* Render the Projects carousel when the path matches the current route */}
			<Route exact path={path}>
				<ProjectsCarousel />
			</Route>
			{/* Render a specific Project page
			the project name is passed as a url paramter */}
			<Route exact path={`${path}/:projectName`}>
				<Project />
			</Route>
		</div>
	);
});

export default Projects;
