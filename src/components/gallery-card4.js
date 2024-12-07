import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card4.css'

const GalleryCard4 = (props) => {
  return (
    <div className="gallery-card4-gallery-card">
      <img
        alt={props.hWRacingAlt}
        src={props.hWRacingSrc}
        className="gallery-card4hw-racing"
      />
      <h2 className="gallery-card4-text1">{props.heading}</h2>
      <span className="gallery-card4-text2">{props.text}</span>
    </div>
  )
}

GalleryCard4.defaultProps = {
  hWRacingSrc: '/external/pastedimage-haa-1500w.png',
  hWRacingAlt: 'pastedImage',
  heading: 'HWRacing\n',
  text: 'Data Acquisition System for HWR-12',
}

GalleryCard4.propTypes = {
  hWRacingSrc: PropTypes.string,
  hWRacingAlt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default GalleryCard4
