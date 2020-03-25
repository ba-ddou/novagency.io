/*
 *
 * About page
 *
 *
 */

import React from "react";
import { inject, observer } from "mobx-react";
import "./styles.sass";
import { SvgSpinningBtn } from "app/components/SpinningBtn";
import viewpb from "app/assets/images/viewpb.svg";
import designill from "app/assets/images/Design Illustration.svg";
import codeill from "app/assets/images/Code Illustration.svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import copy from "./copy";

const About = inject("viewStore")(
	observer(({ viewStore }) => {
		let language = viewStore.language;
		return (
			<div className="mainContent-page">
				<Helmet>
					<title>Nova - About</title>
				</Helmet>
				<div className="mainContent-about">
					<div className="mainContent-description">
						{/* <h1>Digital Creative Agency</h1> */}
						<div className="mainContent-title">
							<span>{copy.tagLineOne[language]}</span>
							<span>{copy.tagLineTwo[language]}</span>
							<span>{copy.tagLineThree[language]}</span>
						</div>
						<p>{copy.description[language]}</p>
					</div>
					<div className="mainContent-cta">
						<Link to="/projects">
							<SvgSpinningBtn
								spinEn={viewpb}
								spinFr={viewpb}
								text=""
							/>
						</Link>
					</div>
					<div className="mainContent-design">
						<p>{copy.designServices[language]}</p>
						<img src={designill} alt=""></img>
					</div>
					<div className="mainContent-code">
						<p>{copy.codeServices[language]}</p>
						<img src={codeill} alt=""></img>
					</div>
				</div>
			</div>
		);
	})
);

export default About;
