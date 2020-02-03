import React, { Component } from 'react'
import { observer, inject, Provider } from 'mobx-react'
import './styles/index.scss'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'app/components/Header'
import Footer from 'app/components/Footer'
import Contact from 'app/screens/contact'
import services from 'app/lib/services'
import Projects from 'app/screens/projects'

export default class App extends Component {


  render() {
    return (
      <Provider services={services}>

        <BrowserRouter>
          <Header />
            <Route exact path='/' render={(props) => <div className="mainContent-page"><h1 className="center-XY">novagency.io | About</h1></div>} />
            <Route path='/projects' render={(props) => <Projects />} />
            <Route exact path='/contact' render={(props) => <Contact />} />
        </BrowserRouter>
        <Footer />
      </Provider>
    )
  }
}
