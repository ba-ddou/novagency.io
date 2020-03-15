/*
 *
 *
 * Animated Nova logo spalsh screen
 *
 *
 */

import React, { useEffect } from "react";
import "./styles.sass";
import { observer, inject } from "mobx-react";
import { motion, useAnimation } from "framer-motion";

const SplashScreen = inject("viewStore")(
	observer(({ viewStore, duration }) => {
		// start and end properties of the animated SVG
		let variants = {
			hidden: {
				opacity: 0,
				pathLength: 0,
				fill: "rgba(255, 255, 255, 0)"
			},
			visible: {
				opacity: 1,
				pathLength: 1,
				fill: "rgba(255, 255, 255, 1)"
			}
		};

		// controls are used to programmatically controle a Framer Motion animated Element
		let controls = useAnimation();

		// this handler fades out the entire splash screen using a css transition
		// then sets the splashScreen observable to false which removes the SplashScreen component from the dom
		let fade = async () => {
			controls
				.start({
					opacity: 0,
					transition: { duration: 0.5, ease: "easeInOut" }
				})
				.then(() => {
					viewStore.splashScreen = false;
				});
		};

		// call fade() the splashScreen observable is set to "fade"
		useEffect(() => {
			viewStore.splashScreen === "fade" ? fade() : false;
		}, [viewStore.splashScreen]);

		return (
			<motion.div id="splashScreen" animate={controls}>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-22 0 100 100"
					className="item">
					{/* map two SVG paths into two Framer Motion animated svg Paths  */}
					{[
						"M54.08,5.69V77.52L0,6.38A61.2,61.2,0,0,1,27.6,0,64.69,64.69,0,0,1,54.08,5.69Z",
						"M56.58,120.93a61.43,61.43,0,0,1-29,7.07,62.64,62.64,0,0,1-26.49-5.83V48.12Z"
					].map(path => (
						<motion.path
							d={path}
							variants={variants}
							initial="hidden"
							animate="visible"
							transition={{
								default: {
									duration: duration,
									ease: "easeInOut",
									loop: Infinity
								},
								fill: {
									duration: duration,
									ease: [1, 0, 0.8, 1],
									loop: Infinity
								}
							}}
						/>
					))}
				</motion.svg>
			</motion.div>
		);
	})
);

export default SplashScreen;
