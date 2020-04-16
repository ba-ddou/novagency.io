/*
 *
 * Generic header
 *
 */
import React from "react";
import "./styles.sass";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import { SvgSpinningBtn } from "app/components/SpinningBtn";
import devis from "app/assets/images/Devis.svg";
import quote from "app/assets/images/Quote.svg";
import icon from "app/assets/images/smallIcon.svg";
import { inject } from "mobx-react";

const Header = inject("viewStore")(({ viewStore }) => {
	let path = window.location.pathname;
	let language = viewStore.language;
	return (
		<div className="header">
			<div className="banner">
				<div className="banner-logotype">NOVA</div>
				<span className="banner-slogan">
					A better future happens by design
				</span>
				<div className="banner-badge">
					<Link to="/contact">
						<SvgSpinningBtn
							spinEn={quote}
							spinFr={devis}
							fix={icon}
						/>
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
						{language == "en" ? "ABOUT" : "A PROPOS"}
					</NavLink>
					<NavLink
						to="/projects"
						className="navbar-navlink"
						activeClassName="navbar-navlink-selected">
						{language == "en" ? "PROJECTS" : "PROJETS"}
					</NavLink>
					<NavLink
						to="/contact"
						className="navbar-navlink"
						activeClassName="navbar-navlink-selected">
						{language == "en" ? "CONTACT" : "CONTACT"}
					</NavLink>
				</div>
			</div>
		</div>
	);
});

export default Header;
