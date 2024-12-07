import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card3.css'

const GalleryCard3 = (props) => {
  return (
    <div className="gallery-card3-gallery-card">
      <img
        alt={props.robotwarsAlt}
        src={props.robotwarsSrc}
        className="gallery-card3-robotwars"
      />
      <h2 className="gallery-card3-text1">{props.heading}</h2>
      <span className="gallery-card3-text2">{props.text}</span>
    </div>
  )
}

GalleryCard3.defaultProps = {
  robotwarsAlt: 'pastedImage',
  robotwarsSrc: '/external/pastedimage-3xu-1500w.png',
  heading: 'HWRobotWars\n',
  text: 'Heriot-Watt Robot Wars Society',
}

GalleryCard3.propTypes = {
  robotwarsAlt: PropTypes.string,
  robotwarsSrc: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default GalleryCard3
