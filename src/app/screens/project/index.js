/*
 *
 *
 * Project page
 *
 */

import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import './styles.sass';
import ProjectsNavBar from "./components/ProjectsNavBar";
import ProjectControls from "./components/ProjectControls";
import { SvgSpinningBtn } from "app/components/SpinningBtn";
import devis from "app/assets/images/Devis-Button.svg";
import img from "app/assets/images/xdesign.jpg";
import apple from "app/assets/images/apple.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import video from "app/assets/images/idyr_ad.mp4";

const Project = inject(
	"modelStore",
	"viewStore"
)(
	observer(({ modelStore, viewStore }) => {
		let { projectName } = useParams();
		let project = modelStore.getProject(projectName);
		if (modelStore.projects.length > 0) {
			if (project) {
				return (
					<div className="projectPage">
						<Helmet>
							<title>Nova - {projectName}</title>
						</Helmet>
						<ProjectsNavBar />
						<div className="projectPage-info">
							<div className="projectPage-info-services">
								{project.services[viewStore.language].map(
									(service, index) => (
										<span
											key={index}
											className="projectPage-info-service">
											{service}
										</span>
									)
								)}
							</div>
							<div className="projectPage-info-description">
								{project.description[viewStore.language]}
							</div>
						</div>
						<div className="projectPage-images">
							{project.content.map((content, index) => {
								if (content.type == "image")
									return (
										<img
											key={index}
											className="projectPage-images-image"
											src={content.src}
											alt={content.alt}
										/>
									);
								else if (content.type == "video")
									return (
										<video
											key={index}
											className="projectPage-images-image"
											src={video}
											alt={content.alt}
											controls={true}
										/>
									);
							})}
						</div>
						<ProjectControls />
						<div className="projectPage-requestInquiry">
							<div className="projectPage-requestInquiry-text">
								<span className="projectPage-requestInquiry-grayText">
									Et si notre prochaine fierté
								</span>
								<br></br>c'était votre projet ?
							</div>
							<Link to="/contact/">
								<SvgSpinningBtn spin={devis} fix="" />
							</Link>
						</div>
					</div>
				);
			} else return <Redirect to="/404" />;
		} else return false;
	})
);

export default Project;
