/*
 *
 * Generic header
 *
 */
import React from "react";
import "./styles.sass";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import { SvgSpinningBtn } from "app/components/SpinningBtn";
import devis from "app/assets/images/Devis-Button.svg";

const Header = props => {
	let path = window.location.pathname;
	return (
		<div className="header">
			<div className="banner">
				<div className="banner-logotype">NOVA</div>
				<span className="banner-slogan">
					A better future happens by design
				</span>
				<div className="banner-badge">
					<Link to="/contact">
						<SvgSpinningBtn spinEn={devis} spinFr={devis} text="" />
					</Link>
				</div>
			</div>
			<div className="navbar">
				<div className="navbar-inner">
					{/* The activeClassName is assigned when its corresponding link -the 'to' prop- is open*/}
					<NavLink
						exact
						to="/"
						className="navbar-navlink"
						activeClassName="navbar-navlink-selected">
						ABOUT
					</NavLink>
					<NavLink
						to="/projects"
						className="navbar-navlink"
						activeClassName="navbar-navlink-selected">
						PROJECTS
					</NavLink>
					<NavLink
						to="/contact"
						className="navbar-navlink"
						activeClassName="navbar-navlink-selected">
						CONTACT
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Header;
