import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import cx from 'classnames'

class Card extends Component {
  render() {
    const { image, title, description, buttonText, url, className } = this.props

    return (
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="card bg-primary">
          <div className="card-img-top">
            <FontAwesome name={image} className={cx('m-auto', className)} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to={url} className="btn btn-success col-lg-5 col-md-5 col-sm-12">{buttonText}</Link>
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
  url: PropTypes.string,
  className: PropTypes.string
}

Card.defaultProps = {
  url: '#'
}

export default Card