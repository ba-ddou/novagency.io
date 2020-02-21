import { observable, action, computed, configure, runInAction, toJS } from 'mobx'


class viewStore {

    @observable
    language = 'en';

    
}

export default new viewStore();
