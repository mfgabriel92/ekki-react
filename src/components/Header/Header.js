import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      me: []
    }
  }

  componentWillMount() {
    const { me } = this.props
    me()
  }

  componentWillReceiveProps(nextProps) {
    const { myself } = nextProps

    if (myself) {
      this.setState({ me: myself.me })
    }
  }

  _renderBalance = () => {
    const { me, me: { balance } } = this.state

    if (!me || !balance) {
      return <Loading size="small" />
    }

    return `R$ ${balance.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`
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
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/"> <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
            <span className="navbar-text col-3 user">
              <div className="user-photo"></div>
              <div className="user-info">
                <span className="user-name">{me.name}</span><br/>
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