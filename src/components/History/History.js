import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import moment from 'moment'

class History extends Component {
  constructor() {
    super()

    this.state = {
      userId: 0,
      historyList: [],
      isLoading: false
    }
  }

  componentDidMount() {
    const { myself: { me }, getTransactions } = this.props
    me && getTransactions(me.id)
  }

  static getDerivedStateFromProps(props, state) {
    const { transaction: { success, failure, progress, transactions }, myself: { me } } = props

    return {
      userId: me && me.id,
      historyList: transactions,
      isLoading: !success && !failure && progress
    }
  }

  render() {
    const { isLoading, historyList } = this.state

    if (isLoading) {
      return <Loading size="dark" className="m-auto" />
    }

    return (
      <div id="history" className="container">
        <h4>Histórico de Transações</h4>
        <table className="table">
          <thead>
            <th scope="col">Beneficiário</th>
            <th scope="col">Valor</th>
            <th scope="col">Data</th>
          </thead>
          <tbody>
            {
              historyList.map(h => {
                return (
                  <tr key={h.id}>
                    <td>{h.beneficiaryId}</td>
                    <td className="col-lg-5">R$ {h.amount.toFixed(2)}</td>
                    <td className="col-lg-3">{moment(h.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className="form-group">
          <Link to="/" className="col-lg-3 col-md-3 col-sm-12 col-xs-12 btn btn-secondary float-left">Voltar</Link>
        </div>
      </div>
    )
  }
}

export default History