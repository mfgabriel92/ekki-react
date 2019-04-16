import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  render() {
    const { label, type, name, value, readOnly, onChange } = this.props

    return (
      <div>
        <label>{label}</label>
        <input type={type} className="form-control" name={name} value={value} readOnly={readOnly} onChange={onChange} />
      </div>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  readOnly: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  readOnly: false
}

export default Input