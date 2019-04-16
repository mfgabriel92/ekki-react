import React, { Component } from 'react'
import moment from 'moment'
import Card from './Card'

class Home extends Component {
  render() {
    return (
      <div id="home" className="container">
        <h6 className="text-right">{moment().format('dddd, MMMM Do YYYY')}</h6>
        <div className="row">
          <Card
            image="users"
            title="Novo Beneficiário"
            description="Adicionar um novo beneficiário que pode receber transferências."
            buttonText="Adicionar"
            url="beneficiaries"
            className="fa-5x"
          />
          <Card
            image="money"
            title="Fazer Transferência"
            description="Faça uma transferência para um de seus beneficiários."
            buttonText="Transferir"
            url="transactions"
            className="fa-5x"
          />
          <Card
            image="history"
            title="Ver Histórico"
            description="Veja o histórico das transações efetuadas para os seus beneficiários."
            buttonText="Ver"
            className="fa-5x"
          />
        </div>
      </div>
    )
  }
}

export default Home