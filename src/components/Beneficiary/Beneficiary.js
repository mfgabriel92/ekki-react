import React, { Component } from 'react'
import Input from '../common/Input'
import Loading from '../Loading'

class Beneficiary extends Component {
  constructor() {
    super()

    this.state = {
      userId: 1,
      name: null,
      accountNumber: null,
      agency: null,
      bankName: null,
      city: null,
      state: null,
      isLoading: false
    }
  }

  componentWillMount() {
    this.setState({
      accountNumber: `${Math.floor(Math.random() * 99999)}-${Math.floor(Math.random() * 9)}`,
      agency: `${Math.floor(Math.random() * 9999)}`
    })
  }

  componentWillReceiveProps(nextProps) {
    const { beneficiary: { progress, success, failure }} = nextProps

    this.setState({ isLoading: !success && !failure && progress })
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
    const { name, accountNumber, agency, bankName, state, isLoading } = this.state

    if (isLoading) {
      return <Loading size="dark" className="m-auto" />
    }

    return (
      <div id="beneficiary" className="container">
        <h4>Novo Beneficiário</h4>
        <hr />
        <form>
          <div className="form-group">
            <Input
              label="Nome do Beneficiário"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-4 col-xs-12">
                <Input
                  label="Número da Conta"
                  name="accountNumber"
                  value={accountNumber}
                  readOnly={true}
                  onChange={this.onChange}
                />
              </div>
              <div className="col-lg-4 col-md-3 col-sm-4 col-xs-12">
                <Input
                  label="Agência"
                  name="agency"
                  value={agency}
                  readOnly={true}
                  onChange={this.onChange}
                />
              </div>
              <div className="col-lg-4 col-md-3 col-sm-4 col-xs-12">
                <Input
                  label="Banco"
                  name="bankName"
                  value={bankName}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="state">Estado</label>
                <select name="state" className="form-control" defaultValue="" onChange={this.onChange}>
                  <option value="" disabled>--</option>
                  <option value="RS">RS</option>
                </select>
              </div>
              {
                state !== '' && <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="state">Cidade</label>
                  <select name="city" className="form-control" defaultValue="" onChange={this.onChange}>
                    <option value="" disabled>--</option>
                    <option value="São Leopoldo">São Leopoldo</option>
                    <option value="Novo Hamburgo">Novo Hamburgo</option>
                  </select>
                </div>
              }
            </div>
          </div>

          <div className="form-group">
            <button className="col-lg-3 col-md-3 col-sm-12 col-xs-12 btn btn-primary float-right" onClick={this.onSubmit}>Adicionar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Beneficiary