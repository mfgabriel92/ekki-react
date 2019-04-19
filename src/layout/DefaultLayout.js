import React, { PureComponent } from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Header from '../components/Header/HeaderContainer'
import Home from '../components/Home/HomeContainer'
import Beneficiary from '../components/Beneficiary/BeneficiaryContainer'
import Transaction from '../components/Transaction/TransactionContainer'
import History from '../components/History/HistoryContainer'

class DefaultLayout extends PureComponent {
  componentWillMount() {
    this.props.me()
  }

  render() {
    return (
      <div id="default-layout">
        <Header {...this.props} />
        <Switch>
          <Route exact path='/' render={props => <Home {...this.props} />} />
          <Route exact path='/beneficiaries' render={props => <Beneficiary {...this.props} />} />
          <Route exact path='/transactions' render={props => <Transaction {...this.props} />} />
          <Route exact path='/histories' render={props => <History {...this.props} />} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}

export default DefaultLayout