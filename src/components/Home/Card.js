import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  render() {
    const { image, title, description, buttonText } = this.props

    return (
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="card bg-primary">
          <div className="card-img-top text-center">
            <img className="m-auto" src={image} />
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
}

export default Card