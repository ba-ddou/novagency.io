import React, { Component } from "react";
import { observer, inject, Provider } from "mobx-react";
import "./styles/index.sass";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import modelStore from "./modelStore";
import viewStore from "./viewStore";
import services from "app/lib/services";
import Header from "app/components/Header";
import Footer from "app/components/Footer";
import Contact from "app/screens/contact";
import Projects from "app/screens/projects";
import About from "app/screens/about";
import SplashScreen from "app/components/SplashScreen";
import NotFound from "app/screens/404";

@observer
export default class App extends Component {
	constructor() {
		super();
		setTimeout(() => {
			viewStore.splashScreen = "fade";
		}, 2200);
	}

	componentDidMount() {
		let run = async _ => {
			let projects = await services.getProjects();
			if (projects) modelStore.projects = projects;
		};
		run();
	}

	render() {
		return (
			<Provider
				services={services}
				modelStore={modelStore}
				viewStore={viewStore}>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/" render={props => <About />} />
						<Route
							path="/projects"
							render={props => <Projects />}
						/>
						<Route
							exact
							path="/contact"
							render={props => <Contact />}
						/>
						<Route path="*" component={NotFound} />
					</Switch>
				</BrowserRouter>
				<Footer />
				{viewStore.splashScreen && (
					<SplashScreen duration={viewStore.splashScreen} />
				)}
			</Provider>
		);
	}
}
