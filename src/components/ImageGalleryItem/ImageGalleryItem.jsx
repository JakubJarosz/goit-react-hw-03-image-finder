import PropTypes from 'prop-types'
import React, { Component } from 'react'

  
const ImageGalleryItem = ({ picItems }) => (
    <>
        {picItems.map(({ id, webformatURL }) => (
            <li key={id}>
                <img src={webformatURL} />
            </li>
        ))}
    </>
)
export default ImageGalleryItem



