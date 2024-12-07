import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card.css'

const GalleryCard = (props) => {
  return (
    <div className="gallery-card-gallery-card">
      <img alt={props.robotwarsAlt} src={props.robotwarsSrc} />
      <h2 className="gallery-card-text1">{props.heading}</h2>
      <span className="gallery-card-text2">{props.text}</span>
    </div>
  )
}

GalleryCard.defaultProps = {
  text: 'Heriot-Watt Robot Wars Society',
  heading: 'HWRobotWars\n',
  robotwarsSrc: '/external/pastedimage-3xu-1500w.png',
  robotwarsAlt: 'pastedImage',
}

GalleryCard.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  robotwarsSrc: PropTypes.string,
  robotwarsAlt: PropTypes.string,
}

export default GalleryCard
