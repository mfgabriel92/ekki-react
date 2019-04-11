import React, { Component } from 'react'
import Loading from '../Loading'

class Home extends Component {
  constructor(props) {
    super(props)

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

  render() {
    const { me, me: { name } } = this.state

    if (!me || !name) {
      return <div className="container"><Loading color="dark m-auto" /></div>
    }

    return (
      <div className="container">
        <h5>Olá, {me.name}</h5>
      </div>
    )
  }
}

export default Home