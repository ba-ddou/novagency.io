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

const ProjectSlide = ({ data, language, key }) => {
	return (
		// a react router Link that wrappes the entire project slide
		<Link to={`/projects/${data.name}`}>
			<div key={data.name ? data.name : key} className="projectSlide">
				<div className="projectSlide-thumbnail">
					{/* lazy loaded project thumbnail */}
					{data.thumbnail && (
						<LazyImage
							src={data.thumbnail.src}
							alt={data.thumbnail.alt}
							// placeholder image render prop
							// all LazyImage props arr passed to 'placeholder' & 'actual'
							// through props inside the imageProps object
							placeholder={({ imageProps, ref }) => (
								<img
									ref={ref}
									src={data.thumbnail.placeholderSrc}
									alt={imageProps.alt}
								/>
							)}
							// actula image render prop
							actual={({ imageProps }) => <img {...imageProps} />}
						/>
					)}
				</div>
				<div className="projectSlide-info">
					{data.name && (
						<React.Fragment>
							<span className="projectSlide-info-name">
								{data.name}
							</span>
							<span className="projectSlide-info-tagline">
								{data.tagline}
							</span>
							<span className="projectSlide-info-services">
								{data.services[language].join(",")}
							</span>
						</React.Fragment>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ProjectSlide;
