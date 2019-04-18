import React, { Component } from 'react'
import Loading from '../Loading'

class History extends Component {
  constructor() {
    super()

    this.state = {
      historyList: null,
      isLoading: false
    }
  }

  componentDidMount() {
    const { myself: { me }, getHistory } = this.props
    getHistory(me.id)
  }

  static getDerivedStateFromProps(props, state) {
    const { history: { success, failure, progress, histories } } = props

    return {
      historyList: histories,
      isLoading: !success && !failure && progress
    }
  }

  render() {
    const { isLoading } = this.state

    if (isLoading) {
      return <Loading size="dark" className="m-auto" />
    }

    return (
      <div id="history" className="container">
        <h4>Histórico de Transações</h4>
      </div>
    )
  }
}

export default History