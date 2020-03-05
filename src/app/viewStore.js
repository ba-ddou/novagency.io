import {
	observable,
	action,
	computed,
	configure,
	runInAction,
	toJS
} from "mobx";

class viewStore {
	constructor() {
		let language = localStorage.getItem("language");
		if (language) this.language = language;
	}

	@observable
	language = "en";

	@observable
	floatingMessageContent = false;

	@observable
	splashScreen = 2;

	@observable
	contactFormInit = {
		fullname: "",
		email: "",
		company: "",
		message: ""
	};
}

export default new viewStore();
