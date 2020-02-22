/*
*
*
* Services layer
*
*
*/

// import * as firebase from 'firebase/app'
// import 'firebase/firestore';


export default new class services {



    submitInquiry = async (values) => {
        try {
            let db = firebase.firestore();
            let { id, ...error } = await db.collection('inquiries').add(values);
            if (id) {
                console.log(id);
                return `inquiry saved successfully | With id ${id}`
            }
            else {
                console.log(error);
                return 'there was a problem submiting your inquiry'
            }
        } catch (error) {
            await new Promise((resolve, reject) => setTimeout(resolve, 1000));
            return 'mock inquiry was succefully saved'
        }


    }

    getProjects = async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 200));
        return projects;
    }
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