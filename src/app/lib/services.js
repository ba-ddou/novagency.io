/*
 *
 *
 * Services layer
 *
 *
 */

// import * as firebase from 'firebase/app'
// import 'firebase/firestore';

export default new (class services {
	submitInquiry = async values => {
		try {
			let db = firebase.firestore();
			values.timestamp = firebase.firestore.Timestamp.now().toDate();
			let { timeout, id, ...error } = await race(
				db.collection("inquiries").add(values)
			);

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
			await new Promise((resolve, reject) => setTimeout(resolve, 1000));
			return ["mock inquiry was succefully sent",false];
		}
	};

	getProjects = async () => {
		await new Promise((resolve, reject) => setTimeout(resolve, 200));
		return projects;
	};
})();

function race(request) {
	return Promise.race([
		request,
		new Promise((resolve, reject) =>
			setTimeout(_ => resolve({ timeout: true }), 3000)
		)
	]);
}

const projects = [
	{
		name: "Branding",
		tagline: "visual Identity and branding",
		description: "visual Identity and branding",
		services: ["visual Identity", "Print", "branding"],
		thumbnail: {
			alt: "branding",
			src: "app/assets/images/xdesign.jpg"
		},
		images: [
			{
				alt: "branding",
				src: "app/assets/images/xdesign.jpg"
			},
			{
				alt: "branding",
				src: "app/assets/images/xdesign.jpg"
			},
			{
				alt: "branding",
				src: "app/assets/images/xdesign.jpg"
			}
		]
	},
	{
		name: "Web",
		tagline: "Web apps & web infrastructures",
		description: "Web apps & web infrastructures",
		services: ["Web apps", "Websites", "Entreprise software", "Rest APIs"],
		thumbnail: {
			alt: "Web",
			src: "app/assets/images/xdesign.jpg"
		},
		images: [
			{
				alt: "branding",
				src: "app/assets/images/xdesign.jpg"
			},
			{
				alt: "branding",
				src: "app/assets/images/xdesign.jpg"
			},
			{
				alt: "branding",
				src: "app/assets/images/xdesign.jpg"
			}
		]
	},
	{
		name: "UI & UX",
		tagline: "UI & UX Design",
		description: "UI & UX Design",
		services: ["UI", "UX"],
		thumbnail: {
			alt: "UI & UX",
			src: "app/assets/images/xdesign.jpg"
		},
		images: [
			{
				alt: "branding",
				src: "app/assets/images/xdesign.jpg"
			},
			{
				alt: "branding",
				src: "app/assets/images/xdesign.jpg"
			},
			{
				alt: "branding",
				src: "app/assets/images/xdesign.jpg"
			}
		]
	}
];
