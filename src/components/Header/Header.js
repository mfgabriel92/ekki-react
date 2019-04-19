import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      me: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const { myself } = nextProps

    if (myself) {
      this.setState({ me: myself.me })
    }
  }

  _renderBalance = () => {
    const { me, me: { userBalance } } = this.state

    if (!me || !userBalance) {
      return <Loading size="small" />
    }

    return `R$ ${userBalance.toFixed(2)}`
  }

  render() {
    const { me } = this.state

    if (!me) {
      return <Loading />
    }

    return (
      <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Ekki</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/"> <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
            <span className="navbar-text col-3 user">
              <div className="user-photo"></div>
              <div className="user-info">
                <span className="user-name">{me.userName}</span><br />
                <span className="user-balance">{this._renderBalance()}</span>
              </div>
            </span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header