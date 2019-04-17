import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import Input from 'cleave.js/react';

class Transaction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: null,
      beneficiaryId: null,
      amount: null,
      beneficiaresList: null,
      isLoading: false
    }
  }

  componentWillMount() {
    const { getBeneficiaries } = this.props
    getBeneficiaries({ userId: 1 })
  }

  componentWillReceiveProps(nextProps) {
    const { beneficiary: { progress, success, failure, beneficiaresList } } = nextProps

    this.setState({
      isLoading: !success && !failure && progress,
      beneficiaresList
    })
  }

  onChange = (e) => {
    if (e.target.name === 'amount') {
      this.setState({
        amount: parseFloat(e.target.rawValue)
      })

      return
    }

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { addTransaction } = this.props
    addTransaction({ ...this.state })
  }

  _populateBeneficiaresList = () => {
    const { beneficiaresList } = this.state

    if (beneficiaresList && beneficiaresList.length > 0) {
      return <div>
        <label>Beneficiário</label>
        <select name="beneficiaryId" className="form-control" defaultValue="" onChange={this.onChange}>
          <option value="" disabled>--</option>
          {
            beneficiaresList.map(b => {
              return (
                <option key={b.id} value={b.id}>{b.name}</option>
              )
            })
          }
        </select>
      </div>
    }
  }

  render() {
    const { amount, isLoading } = this.state

    if (isLoading) {
      return <Loading size="dark" className="m-auto" />
    }

    return (
      <div id="transaction" className="container">
        <h4>Nova Transferência</h4>
        <hr />
        <div className="form-group">
          {this._populateBeneficiaresList()}
        </div>
        <div className="form-group">
          <label>Valor</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">R$</div>
            </div>
            <Input
              name="amount"
              className="form-control"
              options={{
                numeral: true,
                numeralThousandsGroupStyle: 'thousand'
              }}
              onChange={this.onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <Link to="/" className="col-lg-3 col-md-3 col-sm-12 col-xs-12 btn btn-secondary">Voltar</Link>
          <Link to="/beneficiaries" className="col-lg-3 col-md-3 col-sm-12 col-xs-12 btn btn-warning">Novo Baneficiário</Link>
          <button className="col-lg-3 col-md-3 col-sm-12 col-xs-12 btn btn-primary float-right" onClick={this.onSubmit}>Transferir</button>
        </div>
      </div>
    )
  }
}

export default Transaction