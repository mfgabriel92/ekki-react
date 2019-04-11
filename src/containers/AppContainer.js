import React, { Component } from 'react'
import Home from './Home'
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppContainer