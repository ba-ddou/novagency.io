/*
 *
 *
 * Project page
 *
 */

import React,{useEffect} from "react";
import { useParams, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";
import "./styles.sass";
import ProjectsNavBar from "./components/ProjectsNavBar";
import ProjectControls from "./components/ProjectControls";
import { SvgSpinningBtn } from "app/components/SpinningBtn";
import devis from "app/assets/images/Devis.svg";
import quote from "app/assets/images/Quote.svg";
import icon from "app/assets/images/smallIcon.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LazyImage } from "react-lazy-images";

const Project = inject(
	"modelStore",
	"viewStore"
)(
	observer(({ modelStore, viewStore }) => {


		// retreive the projectName url parameter from the React Router useParams hook
		// this parameter is synamicaly supplied by the project slide's Link
		let { projectName } = useParams();
		// retreive project data that corressponds to projectName
		let project = modelStore.getProject(projectName);
		// if project exists and data is truthy then render
		if (modelStore.projectsAreLoaded) {
			if (project) {
				return (
					<div className="projectPage">
						{/* Page metaData */}
						<Helmet>
							<title>Nova - {projectName}</title>
						</Helmet>
						{/* projects navbar | links to all projects */}
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
							{/* map a content array to img and video tags */}
							{project.content.map((content, index) => {
								// render an image or a video relatif to the content type
								if (content.type == "image")
									return (
										// lazy loaded image
										<LazyImage
											key={index}
											className="projectPage-images-image"
											src={content.src}
											alt={content.alt}
											placeholder={({
												imageProps,
												ref
											}) => (
												<img
													ref={ref}
													key={imageProps.key}
													src={content.placeholderSrc}
													className={
														imageProps.className
													}
													alt={imageProps.alt}
												/>
											)}
											actual={({ imageProps }) => (
												<img {...imageProps} />
											)}
										/>
									);
								else if (content.type == "video")
									return (
										<video
											key={index}
											className="projectPage-images-image"
											src={content.src}
											alt={content.alt}
											controls={true}
										/>
									);
							})}
						</div>
						{/* next and previous project btn */}
						<ProjectControls />
						<div className="projectPage-requestInquiry">
							<div className="projectPage-requestInquiry-text">
								<span className="projectPage-requestInquiry-grayText">
									Et si notre prochaine fierté
								</span>
								<br></br>c'était votre projet ?
							</div>
							<Link to="/contact/">
								<SvgSpinningBtn
									spinEn={quote} spinFr={devis} fix={icon}
								/>
							</Link>
						</div>
					</div>
				);
			} else return <Redirect to="/404" />; // redirect to 404 page if project data does not exist
		}
	})
);

export default Project;
