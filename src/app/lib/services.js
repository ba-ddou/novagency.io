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
                return [`inquiry saved successfully | With id ${id}`,false]
            }
            else {
                console.log(error);
                return [false,'there was a problem submiting your inquiry']
            }
        } catch (error) {
            await new Promise((resolve, reject) => setTimeout(resolve, 1000));
            return ['mock inquiry was succefully saved',false]
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
        description: "Lorem ipsum dolor sit amet,cons ectetur adipiscing elit,  sed do eiusmod tempor Lectus quam id leo in vitae turpis massa sed. In eu mi bibendum neque. Aliquet enim tortor at auctor urna nunc id cursus metus. Sed vulputate odio ut enim blandit volutpat. Non blandit massa enim nec dui nunc. Ultricies tristique nulla aliquet enim. Consectetur a erat nam at lectus urna duis. Libero enim sed faucibus turpis in eu mi bibendum neque. Non pulvinar neque laoreet suspendisse. Enim nunc faucibus a pellentesque sit amet porttitor eget. Eu ultrices vitae auctor eu.",
        services: ["Visual Identity", "Logo Design", "Conception", "Photographie"],
        thumbnail: {
            alt: "branding",
            src: "app/assets/images/xdesign.jpg"
        },
        images: [
            {
                alt: "branding",
                src: "app/assets/images/Essential Stationery.png"
            },
            {
                alt: "branding",
                src: "app/assets/images/Essential Stationery.png"
            },
            {
                alt: "branding",
                src: "app/assets/images/Essential Stationery.png"
            }
        ]
    },
    {
        name: "Web",
        tagline: "Web apps & web infrastructures",
        description: "Lorem ipsum dolor sit amet,cons ectetur adipiscing elit,  sed do eiusmod tempor Lectus quam id leo in vitae turpis massa sed. In eu mi bibendum neque. Aliquet enim tortor at auctor urna nunc id cursus metus. Sed vulputate odio ut enim blandit volutpat. Non blandit massa enim nec dui nunc. Ultricies tristique nulla aliquet enim. Consectetur a erat nam at lectus urna duis. Libero enim sed faucibus turpis in eu mi bibendum neque. Non pulvinar neque laoreet suspendisse. Enim nunc faucibus a pellentesque sit amet porttitor eget. Eu ultrices vitae auctor eu.",
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
        description: "Lorem ipsum dolor sit amet,cons ectetur adipiscing elit,  sed do eiusmod tempor Lectus quam id leo in vitae turpis massa sed. In eu mi bibendum neque. Aliquet enim tortor at auctor urna nunc id cursus metus. Sed vulputate odio ut enim blandit volutpat. Non blandit massa enim nec dui nunc. Ultricies tristique nulla aliquet enim. Consectetur a erat nam at lectus urna duis. Libero enim sed faucibus turpis in eu mi bibendum neque. Non pulvinar neque laoreet suspendisse. Enim nunc faucibus a pellentesque sit amet porttitor eget. Eu ultrices vitae auctor eu.",
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