import React, { PureComponent } from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Header from '../containers/Header'
import Home from '../containers/Home'
import Beneficiary from '../containers/Beneficiary'
import Transaction from '../containers/Transaction'

class DefaultLayout extends PureComponent {
  componentWillMount() {
    this.props.me()
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Switch>
          <Route exact path='/' render={props => <Home {...this.props} />} />
          <Route exact path='/beneficiaries' render={props => <Beneficiary {...this.props} />} />
          <Route exact path='/transactions' render={props => <Transaction {...this.props} />} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default DefaultLayout