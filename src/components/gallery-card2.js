import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card2.css'

const GalleryCard2 = (props) => {
  return (
    <div className="gallery-card2-gallery-card">
      <img alt={props.mTAAlt} src={props.mTASrc} className="gallery-card2mta" />
      <h2 className="gallery-card2-text1">
        <span>MediTech Automation</span>
        <br></br>
      </h2>
      <span className="gallery-card2-text4">{props.text}</span>
    </div>
  )
}

GalleryCard2.defaultProps = {
  mTASrc: '/external/pastedimage-r3dk-900w.png',
  mTAAlt: 'pastedImage',
  text: 'University Group project',
}

GalleryCard2.propTypes = {
  mTASrc: PropTypes.string,
  mTAAlt: PropTypes.string,
  text: PropTypes.string,
}

export default GalleryCard2
