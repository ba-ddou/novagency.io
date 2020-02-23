import {
	observable,
	action,
	computed,
	configure,
	runInAction,
	toJS
} from "mobx";

class viewStore {
	@observable
	language = "en";

	@observable
	floatingMessageContent = false;

	@observable
	splashScreen = true;
}

export default new viewStore();
