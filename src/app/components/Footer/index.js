/*
 *
 * Generic Footer
 *
 */
import React from "react";
import { inject, observer } from "mobx-react";
import "./styles.sass";

// a component that uses dynamic copy will not change its language unless it's an observer
const Footer = inject("viewStore")(
	observer(({ viewStore }) => {
		// the selected language is held in the viewStore's language observable
		let lang = viewStore.language;

		// on language change hanlder
		let changeLanguage = lang => {
			// execute the function's body if the select language
			// is not the current language in the viewStore
			if (viewStore.language != lang) {
				// set the splashScreen observable to 0.6
				// this value represents the splashscreen animation duration
				// settingthis observable to a value causes the splashscreen to render
				viewStore.splashScreen = 0.6;
				// in order to avoid the user seeing any sudden language change glitches
				// the language is changed 100ms after the splashscreen is triggered
				setTimeout(() => (viewStore.language = lang), 100);
				// setting the splashscreen observable's value to "fade"
				// causes it to fade a remove itself from the dom
				setTimeout(() => (viewStore.splashScreen = "fade"), 500);
				// save the user's chosen language to local storage
				// all subsequent renders will be in this language
				localStorage.setItem("language", lang);
			}
		};

		return (
			<div className="footer">
				<div className="footer-social">
					<div className="footer-logotype">NOVA</div>
				</div>
				<div className="footer-languages">
					<span
						onClick={changeLanguage.bind(0, "fr")}
						className={
							"footer-languages-french " +
							(lang === "fr" ? "footer-languages-selected" : "")
						}>
						Français
					</span>
					<span
						onClick={changeLanguage.bind(0, "en")}
						className={
							"footer-languages-english " +
							(lang === "en" ? "footer-languages-selected" : "")
						}>
						English
					</span>
				</div>
			</div>
		);
	})
);

export default Footer;
