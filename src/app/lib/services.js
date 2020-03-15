/*
 *
 *
 * Services layer
 *
 *
 */

import * as firebase from "firebase/app";
import "firebase/firestore";
import config from "app/config/config.js";

class services {
	constructor() {
		// initialize the firebase sdk and firestore db object
		firebase.initializeApp(config.firebaseConfig);
		this.db = firebase.firestore();
	}

	// submit an inquiry to the inquiries collection
	submitInquiry = async values => {
		// TODO: modify dev build fallback
		try {
			// add a firebase server timesatamp to the inquiy's values object
			values.timestamp = firebase.firestore.FieldValue.serverTimestamp();
			// add a new document to the inquiries collection
			// race() wrapps the request in a timeout
			let { timeout, id, ...error } = await race(
				this.db.collection("inquiries").add(values)
			)
				.then(res => {
					console.log(res);
					return res;
				})
				.catch(err => console.error(err));

			// a successful request return the document id
			if (id) {
				return ["inquiry successfully sent", false];
			} else if (timeout) {
				// is the request timesout, timout is set to true
				return [false, "connection error"];
			} else {
				// error handler
				return [false, "unknown error, try agian later"];
			}
		} catch (error) {
			// dev build fallback
			// in case firebase is not defined
			// TODO: rewrite this fallback
			await new Promise((resolve, reject) => setTimeout(resolve, 1000));
			return ["mock inquiry was succefully sent", false];
		}
	};

	// retreive projects data
	getProjects = async () => {
		// retreive project data from local storage
		let projects = localStorage.getItem("projects");
		// return local projects data if found in localstorage
		if (projects) {
			return JSON.parse(projects);
		} else {
			// read projects data from firebase
			try {
				let projects = await this.db
					.collection("projects")
					.get()
					.then(snapshot => {
						var arr = [];
						snapshot.forEach(doc => {
							arr.push(doc.data());
						});
						return arr;
					})
					.catch(err => {
						return false;
					});
				// save projects data to localstorage
				if (projects)
					localStorage.setItem("projects", JSON.stringify(projects));
				return [];
			} catch (error) {
				// dev build fallback
				// in case firebase is not defined
				// TODO: rewrite fallback
				await new Promise((resolve, reject) =>
					setTimeout(resolve, 200)
				);
				return staticProjects;
			}
		}
	};
}

export default new services();

// this is functions uses a setTimeout with the native Promise.race
// to create a request timeout. If the passed request takes longer than
// than the setTimeout, the promise resolves to { timeout : true }
function race(request) {
	return Promise.race([
		request,
		new Promise((resolve, reject) =>
			setTimeout(_ => resolve({ timeout: true }), 3000)
		)
	]);
}

const staticProjects = [
	{
		name: "static Nova 1",
		tagline: "A better future happens by design",
		description: {
			en:
				"English Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
			fr:
				"Français Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
		},
		services: {
			en: [
				"Visual Identity",
				"Stationary",
				"branding",
				"UI & UX Desing",
				"Website"
			],
			fr: [
				"identité visuelle",
				"Stationary",
				"branding",
				"UI & UX Desing",
				"Site Web"
			]
		},
		thumbnail: {
			alt: "nova",
			src:
				"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
		},
		content: [
			{
				type: "image",
				alt: "image1",
				src:
					"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
			},
			{
				type: "image",
				alt: "image2",
				src:
					"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
			},
			{
				type: "image",
				alt: "image3",
				src:
					"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
			}
		]
	},
	{
		name: "Static Nova 2",
		tagline: "A better future happens by design",
		description: {
			en:
				"English Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
			fr:
				"Français Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
		},
		services: {
			en: [
				"Visual Identity",
				"Stationary",
				"branding",
				"UI & UX Desing",
				"Website"
			],
			fr: [
				"identité visuelle",
				"Stationary",
				"branding",
				"UI & UX Desing",
				"Site Web"
			]
		},
		thumbnail: {
			alt: "nova",
			src:
				"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
		},
		content: [
			{
				type: "image",
				alt: "image1",
				src:
					"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
			},
			{
				type: "image",
				alt: "image2",
				src:
					"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
			},
			{
				type: "image",
				alt: "image3",
				src:
					"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
			}
		]
	},
	{
		name: "Idyr",
		tagline: "A better future happens by design",
		description: {
			en:
				"English Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
			fr:
				"Français Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
		},
		services: {
			en: [
				"Visual Identity",
				"Stationary",
				"branding",
				"UI & UX Desing",
				"Website"
			],
			fr: [
				"identité visuelle",
				"Stationary",
				"branding",
				"UI & UX Desing",
				"Site Web"
			]
		},
		thumbnail: {
			alt: "nova",
			src:
				"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
		},
		content: [
			{
				type: "video",
				alt: "image1",
				src: ""
			},
			{
				type: "image",
				alt: "image2",
				src:
					"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
			},
			{
				type: "image",
				alt: "image3",
				src:
					"https://firebasestorage.googleapis.com/v0/b/nova-dev-00.appspot.com/o/Essential%20Stationery.png?alt=media&token=0ae18725-9b33-4a2d-8331-b7e2661916e6"
			}
		]
	}
];
