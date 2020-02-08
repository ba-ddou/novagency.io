/*
*
* Generic header
*
*/
import React from 'react';
import './styles.scss'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header">
            <div id="banner">
                <div id="banner-logotype">NOVA</div>
                <span id="banner-slogan" className="center-XY">A better future happens by design</span>
                <div id="banner-badge">BADGE</div>
            </div>
            <div id="navbar">
                <div id="navbar-inner" className="center-XY">
                    {/* The activeClassName is assigned when its corresponding link -the 'to' prop- is open*/}
                    <NavLink exact to="/" className="navbar-navlink" activeClassName="navbar-navlink-selected">ABOUT</NavLink>
                    <NavLink to="/projects" className="navbar-navlink" activeClassName="navbar-navlink-selected">PROJECTS</NavLink>
                    <NavLink to="/contact" className="navbar-navlink" activeClassName="navbar-navlink-selected">CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;