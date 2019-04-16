import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'
import Beneficiary from './Beneficiary'
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/beneficiaries' component={Beneficiary} exact />
          <Route component={Home} exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppContainer