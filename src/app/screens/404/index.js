/*
 *
 *
 * 404 error page
 *
 *
 */

import React from "react";
import "./styles.sass";
import svg from "app/assets/images/404.svg";

const NotFound = () => {
	return (
		<div id="page-notFound">
			<img src={svg} />
		</div>
	);
};

export default NotFound;
