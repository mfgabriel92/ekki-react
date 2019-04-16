import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class Loading extends Component {
  render() {
    const { size, color } = this.props

    return (
      <div className={cx('spinner', size, color)}>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    )
  }
}

Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

Loading.defaultProps = {
  size: '',
  color: 'light'
}

export default Loading