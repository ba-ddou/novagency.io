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
		firebase.initializeApp(config.firebaseConfig);
		this.db = firebase.firestore();
	}

	submitInquiry = async values => {
		try {
			values.timestamp = firebase.firestore.FieldValue.serverTimestamp();
			console.log("Value :: \n", values);
			let { timeout, id, ...error } = await race(
				this.db.collection("inquiries").add(values)
			)
				.then(res => {
					console.log(res);
					return res;
				})
				.catch(err => console.error(err));

			if (id) {
				console.log(id);
				return ["inquiry successfully sent", false];
			} else if (timeout) {
				console.log("request timeout");
				return [false, "connection error"];
			} else {
				console.error(error);
				return [false, "unknown error, try agian later"];
			}
		} catch (error) {
			console.log(error);
			await new Promise((resolve, reject) => setTimeout(resolve, 1000));
			return ["mock inquiry was succefully sent", false];
		}
	};

	getProjects = async () => {
		let projects = localStorage.getItem("projects");
		if (projects) {
			return JSON.parse(projects);
		} else {
			// await new Promise((resolve, reject) => setTimeout(resolve, 500));
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
					});
				localStorage.setItem("projects", JSON.stringify(projects));
				console.log("projects data retreived from firebase");
				return projects;
			} catch (error) {
				console.error(error);
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
