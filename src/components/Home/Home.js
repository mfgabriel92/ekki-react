import React, { Component } from 'react'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      me: null
    }
  }

  componentWillMount() {
    this.props.me()
  }

  componentWillReceiveProps(nextProps) {
    const { myself } = nextProps

    if (myself) {
      this.setState({ me: myself.me })
    }
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Home