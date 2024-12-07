import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-text1">{props.title}</h2>
      <span className="gallery-card1-text2">{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  rootClassName: '',
  imageAlt: 'Intelligent System for Automated Assistance and Computing',
  title: 'Project Title',
  imageSrc:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  subtitle: 'Intelligent System for Automated Assistance and Computing',
}

GalleryCard1.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  subtitle: PropTypes.string,
}

export default GalleryCard1
