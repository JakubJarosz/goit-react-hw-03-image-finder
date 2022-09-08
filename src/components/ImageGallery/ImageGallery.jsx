import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ImageGallery extends Component {

    render() {
      const {children} = this.props
    return (
        <ul className="gallery">
           {children}
        </ul>
    )
  }
}

export default ImageGallery