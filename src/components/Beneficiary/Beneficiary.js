import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from '../common/Input'
import Loading from '../Loading'

class Beneficiary extends Component {
  constructor() {
    super()

    this.state = {
      beneficiaryUserId: '',
      beneficiaryName: '',
      beneficiaryAccountNumber: '',
      beneficiaryAgency: '',
      beneficiaryBankName: '',
      beneficiaryCity: '',
      beneficiaryState: '',
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({
      beneficiaryAccountNumber: `${Math.floor(Math.random() * 99999)}-${Math.floor(Math.random() * 9)}`,
      beneficiaryAgency: `${Math.floor(Math.random() * 9999)}`
    })
  }

  static getDerivedStateFromProps(props) {
    const { beneficiary: { progress, success, failure }, myself: { me } } = props

    if (success) {
      window.location.href = 'http://localhost:3000/'
    }

    return {
      beneficiaryUserId: me && me.userId,
      isLoading: !success && !failure && progress
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { addBeneficiary } = this.props
    addBeneficiary({ ...this.state })
  }

  render() {
    const { beneficiaryName, beneficiaryAccountNumber, beneficiaryAgency, beneficiaryBankName, beneficiaryState, isLoading } = this.state

    if (isLoading) {
      return <Loading size="dark" className="m-auto" />
    }

    return (
      <div id="beneficiary" className="container">
        <h4>Novo Beneficiário</h4>
        <hr />
        <div className="form-group">
          <Input
            label="Nome do Beneficiário"
            name="beneficiaryName"
            value={beneficiaryName}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-4 col-xs-12">
              <Input
                label="Número da Conta"
                name="beneficiaryAccountNumber"
                value={beneficiaryAccountNumber}
                readOnly={true}
                onChange={this.onChange}
              />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-4 col-xs-12">
              <Input
                label="Agência"
                name="beneficiaryAgency"
                value={beneficiaryAgency}
                readOnly={true}
                onChange={this.onChange}
              />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-4 col-xs-12">
              <Input
                label="Banco"
                name="beneficiaryBankName"
                value={beneficiaryBankName}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label>Estado</label>
              <select name="beneficiaryState" className="form-control" defaultValue="" onChange={this.onChange}>
                <option value="" disabled>--</option>
                <option value="RS">RS</option>
              </select>
            </div>
            {
              beneficiaryState && <div className="col-lg-6 col-md-6 col-sm-12">
                <label>Cidade</label>
                <select name="beneficiaryCity" className="form-control" defaultValue="" onChange={this.onChange}>
                  <option value="" disabled>--</option>
                  <option value="São Leopoldo">São Leopoldo</option>
                  <option value="Novo Hamburgo">Novo Hamburgo</option>
                </select>
              </div>
            }
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <Link to="/" className="col-lg-3 col-md-3 col-sm-12 col-xs-12 btn btn-secondary float-left">Voltar</Link>
            <button className="col-lg-3 col-md-3 col-sm-12 col-xs-12 btn btn-primary ml-auto" onClick={this.onSubmit}>Adicionar</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Beneficiary