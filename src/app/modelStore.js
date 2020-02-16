import { observable, action, computed, configure, runInAction, toJS } from 'mobx'


class modelStore {

    @observable
    projects = [];

    @action getProject (name){
        let projects = toJS(this.projects);
        return toJS(projects.filter(element=>element.name===name))[0];
    }

    @computed get projectsNames (){
        let projects = toJS(this.projects);
        return projects.map(element=>element.name);
    }
}

export default new modelStore();
