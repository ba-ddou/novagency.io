/*
 *
 * Project Slide
 *
 *
 */

import React from "react";
import "./styles.sass";
import { Link } from "react-router-dom";
import { toJS } from "mobx";
import thumb from "app/assets/images/Essential Stationery.png";
import { LazyImage } from "react-lazy-images";

// {JSON.stringify(toJS(data))}

const ProjectSlide = ({ data, language }) => {
	return (
		<Link to={`/projects/${data.name}`}>
			<div key={data.name} className="projectSlide">
				<div className="projectSlide-thumbnail">
					<LazyImage
						src={data.thumbnail.src}
						alt="projectThumbnail"
						placeholder={({ imageProps, ref }) => (
							<img
								ref={ref}
								src="https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery%20small.png?alt=media&token=2e4c471a-82e1-4a09-a364-9e4958e66c98"
								alt={imageProps.alt}
							/>
						)}
						actual={({ imageProps }) => <img {...imageProps} />}
					/>
				</div>
				<div className="projectSlide-info">
					<span className="projectSlide-info-name">{data.name}</span>
					<span className="projectSlide-info-tagline">
						{data.tagline}
					</span>
					<span className="projectSlide-info-services">
						{data.services[language].join(",")}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default ProjectSlide;
