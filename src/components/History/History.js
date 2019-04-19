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
    const { getTransactions } = this.props
    getTransactions(1)
  }

  static getDerivedStateFromProps(props) {
    const { transaction: { success, failure, progress, transactions }, myself: { me } } = props

    return {
      userId: me && me.userId,
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
        <hr/>
        <table className="table">
          <thead>
            <th scope="col">Beneficiário</th>
            <th scope="col">Banco</th>
            <th scope="col">Conta Bancária</th>
            <th scope="col">Agência</th>
            <th scope="col">Valor</th>
            <th scope="col">Status</th>
            <th scope="col">Data</th>
          </thead>
          <tbody>
            {
              historyList.map(h => {
                return (
                  <tr key={h.id}>
                    <td>{h.beneficiary.beneficiaryName}</td>
                    <td>{h.beneficiary.beneficiaryBankName}</td>
                    <td>{h.beneficiary.beneficiaryAccountNumber}</td>
                    <td>{h.beneficiary.beneficiaryAgency}</td>
                    <td>R$ {h.transactionAmount.toFixed(2)}</td>
                    <td>{h.transactionStatus.toUpperCase()}</td>
                    <td>{moment(h.transactionCreatedAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
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