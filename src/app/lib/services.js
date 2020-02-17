/*
*
*
* Services layer
*
*
*/



export default new class services {
    submitInquiry = async (values) => {
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        return "inquiry saved successfully" 
    }

    getProjects = async ()=>{
        await new Promise((resolve, reject) => setTimeout(resolve, 600));
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
        images : [
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
        images : [
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
        images : [
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