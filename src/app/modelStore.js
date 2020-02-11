import { observable, action, computed, configure, runInAction, toJS } from 'mobx'


class modelStore {

    @observable
    projects = [
        {
            title : "Branding",
            description : "visual Identity and branding",
            services : ["visual Identit","Print","branding"],
            thumbnail : {
                    title : "branding",
                    src : "app/assets/images/xdesign.jpg"
            }
        },
        {
            title : "Web",
            description : "Web apps & infrastructures",
            services : ["Web apps","Websites","Entreprise software","Rest APIs"],
            thumbnail : {
                    title : "Web",
                    src : "app/assets/images/xdesign.jpg"
            }
        },
        {
            title : "UI & UX",
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
