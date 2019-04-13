import React, { Component } from 'react'
import Loading from '../Loading'
import moment from 'moment'
import Card from './Card';

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
      <div id="home" className="container">
        <h6>{moment().format('dddd, MMMM Do YYYY')}</h6>
        <div className="row">
          <Card image="/new-user.png" title="Novo Beneficiário" description="Adicionar um novo beneficiário que pode receber transferências." buttonText="Adicionar"/>
          <Card image="/transfer-icon.png" title="Fazer Transferência" description="Faça uma transferência para um de seus beneficiários." buttonText="Transferir"/>
          <Card image="/history-icon.png" title="Ver Histórico" description="Veja o histórico de transferências efetuadas para seus beneficiários." buttonText="Ver"/>
        </div>
      </div>
    )
  }
}

export default Home