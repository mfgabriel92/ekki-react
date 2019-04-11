import React, { Component } from 'react'
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
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
              </li>
            </ul>
            <span className="navbar-text balance">
              {this._renderBalance()}
            </span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header