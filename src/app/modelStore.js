import { observable, action, computed, configure, runInAction, toJS } from 'mobx'


class modelStore {

    @observable
    projects = [
        {
            title : "Branding",
            tagline : "visual Identity and branding",
            description : "visual Identity and branding",
            services : ["visual Identity","Print","branding"],
            thumbnail : {
                    title : "branding",
                    src : "app/assets/images/xdesign.jpg"
            }
        },
        {
            title : "Web",
            tagline : "Web apps & web infrastructures",
            description : "Web apps & web infrastructures",
            services : ["Web apps","Websites","Entreprise software","Rest APIs"],
            thumbnail : {
                    title : "Web",
                    src : "app/assets/images/xdesign.jpg"
            }
        },
        {
            title : "UI & UX",
            tagline : "UI & UX Design",
            description : "UI & UX Design",
            services : ["UI","UX"],
            thumbnail : {
                    title : "UI & UX",
                    src : "app/assets/images/xdesign.jpg"
            }
        }
    ];
}

export default new modelStore();
