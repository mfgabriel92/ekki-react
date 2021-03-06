import React, { Component } from 'react'
import { deleteFlashMessage } from '../../../actions/app'
import FontAwesome from 'react-fontawesome'
import cx from 'classnames'

class FlashMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hide: true,
    }
  }

  componentDidMount() {
    const { flash: { message } } = this.props
    message && this.hideMessage()
  }

  componentWillReceiveProps(nextProps) {
    const { flash: { message } } = nextProps
    message && this.hideMessage()
  }

  hideMessage = () => {
    this.setState({ hide: false })

    setTimeout(() => {
      this.setState({ hide: true })
      deleteFlashMessage()
    }, 4000)
  }

  render() {
    const {
      flash: {
        message,
        errors,
        type
      }
    } = this.props

    const { hide } = this.state

    let modalClass
    let icon

    switch (type) {
      case 'success':
        modalClass = 'alert-success'
        icon = 'check'
        break
      case 'processing':
        modalClass = 'alert-warning'
        icon = 'warning'
        break
      case 'error':
        modalClass = 'alert-danger'
        icon = 'close'
        break
      default:
        modalClass = 'alert-default'
        icon = 'question'
        break
    }

    return (
      !hide && <div className={cx('text-center alert', modalClass)}>
        <div className="row">
          <div className="col-2 icon">
            <FontAwesome name={icon} className='fa-3x' />
          </div>
          <div className="col-10 message">
            {
              errors !== null
                ? errors.map(e => {
                  return (
                    <div>{e.defaultMessage}</div>
                  )
                })
                : message
            }
          </div>
        </div>
      </div>
    )
  }
}

export default FlashMessage