import { observable, action, computed, configure, runInAction, toJS } from 'mobx'


class modelStore {

    @observable
    projects = [
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

    @action getProject (name){
        let projects = toJS(this.projects);
        return toJS(projects.filter(element=>element.name===name));
    }

    @computed get projectsNames (){
        let projects = toJS(this.projects);
        return projects.map(element=>element.name);
    }
}

export default new modelStore();
