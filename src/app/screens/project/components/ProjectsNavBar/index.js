/*
*
*
* Projects Navigation bar
*
*/


import React from 'react';
import { inject } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import './styles.sass'

const ProjectsNavBar = inject('modelStore')(
    (props) => {
        return (
            <div id="projectPage-NavBar">
                {props.modelStore.projectsNames.map(name =>
                    <NavLink exact to={`/projects/${name}`} className="navbar-navlink" activeClassName="navbar-navlink-selected">{name}</NavLink>)}
            </div>
        );
    }
);

export default ProjectsNavBar;