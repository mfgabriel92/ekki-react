import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import cx from 'classnames'

class Card extends Component {
  render() {
    const { image, title, description, buttonText, className } = this.props

    return (
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="card bg-primary">
          <div className="card-img-top">
            <FontAwesome name={image} className={cx('m-auto', className)} />
          </div>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <a href="#" class="btn btn-warning">{buttonText}</a>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Card