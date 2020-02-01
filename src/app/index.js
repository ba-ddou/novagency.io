import React, { Component } from 'react'
import { observer, inject, Provider } from 'mobx-react'
import './styles/index.scss'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'app/components/Header'
import Footer from 'app/components/Footer'
export default class App extends Component {


  render() {
    return (
      <Provider>
        
        <BrowserRouter>
          <Header />
          <Route exact path='/' render={(props) =><div style={{height : 'calc(100% - 220px)'}}><h1 className="center-XY">novagency.io | About</h1></div> } />
          <Route exact path='/projects' render={(props) => <div style={{height : 'calc(100% - 220px)'}}><h1 className="center-XY">novagency.io | Projects</h1></div>} />
          <Route exact path='/contact' render={(props) => <div style={{height : 'calc(100% - 220px)'}}><h1 className="center-XY">novagency.io | Contact</h1></div>} />
        </BrowserRouter>
        <Footer />
      </Provider>
    )
  }
}
