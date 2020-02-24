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

		let controls = useAnimation();

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

		useEffect(() => {
			viewStore.splashScreen === "fade" ? fade() : false;
		}, [viewStore.splashScreen]);

		return (
			<motion.div id="splashScreen" animate={controls}>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-22 0 100 100"
					className="item">
					<motion.path
						// d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
						d="M54.08,5.69V77.52L0,6.38A61.2,61.2,0,0,1,27.6,0,64.69,64.69,0,0,1,54.08,5.69Z"
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
					<motion.path
						d="M56.58,120.93a61.43,61.43,0,0,1-29,7.07,62.64,62.64,0,0,1-26.49-5.83V48.12Z"
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
				</motion.svg>
			</motion.div>
		);
	})
);

export default SplashScreen;
