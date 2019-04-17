import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import DefaultLayout from '../containers/DefaultLayout'

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    )
  }
}

export default AppContainer