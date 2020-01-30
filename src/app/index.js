import React, { Component } from 'react'
import { observer, inject, Provider } from 'mobx-react'
import './styles/index.scss'
import viewStore from './viewStore'


@observer
export default class App extends Component {



  

  render() {
    return(
      <h1>Novagency.io</h1>
    )
  }
}
