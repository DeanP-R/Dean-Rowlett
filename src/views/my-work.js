import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard3 from '../components/gallery-card3'
import GalleryCard2 from '../components/gallery-card2'
import GalleryCard4 from '../components/gallery-card4'
import GalleryCard1 from '../components/gallery-card1'
import './my-work.css'

const MyWork = (props) => {
  return (
    <div className="my-work-container1">
      <Helmet>
        <title>My-Work - Dean Rowlett Portfolio</title>
        <meta property="og:title" content="My-Work - Dean Rowlett Portfolio" />
      </Helmet>
      <div data-role="Header" className="my-work-navbar-container">
        <div className="my-work-navbar">
          <Link to="/" className="my-work-heading1 Card-Heading">
            DeanRowlett
          </Link>
          <div className="my-work-links-container1">
            <Link to="/about-me" className="Card-Heading">
              About Me
            </Link>
          </div>
          <div data-role="BurgerMenu" className="my-work-burger-menu">
            <svg viewBox="0 0 1024 1024" className="my-work-icon1">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="my-work-mobile-menu">
            <div className="my-work-container2">
              <Link to="/" className="my-work-heading2 Card-Heading">
                DeanRowlett
              </Link>
              <div data-role="CloseMobileMenu" className="my-work-close-menu">
                <svg viewBox="0 0 1024 1024" className="my-work-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="my-work-links-container2">
              <Link to="/about-me" className="my-work-link2 Navbar-Link">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-work-section-separator"></div>
      <div className="my-work-gallery">
        <a
          href="https://www.hwunion.com/societies/9066/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard3 className="my-work-component1"></GalleryCard3>
        </a>
        <a
          href="https://mta.teleporthq.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard2 className="my-work-component2"></GalleryCard2>
        </a>
        <Link to="/daq">
          <GalleryCard4 className="my-work-component3"></GalleryCard4>
        </Link>
        <Link to="/the-unit">
          <GalleryCard1
            title="The Unit"
            subtitle="Humanoid Robotic System"
            imageSrc="/snapchat-1612907981-1500w.jpg"
            rootClassName="rootClassName3"
            className="my-work-component4"
          ></GalleryCard1>
        </Link>
        <Link to="/isaac">
          <GalleryCard1
            title="I.S.A.A.C."
            imageSrc="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1000"
            rootClassName="rootClassName4"
            className="my-work-component5"
          ></GalleryCard1>
        </Link>
        <Link to="/plant-watering">
          <GalleryCard1
            title="Autonomous Plant Watering"
            subtitle="Closed-loop plant watering system"
            imageSrc="/img-20230324-wa0000-1500h.jpg"
            rootClassName="rootClassName5"
            className="my-work-component6"
          ></GalleryCard1>
        </Link>
        <Link to="/ropeless-fishing-gear-demonstrator">
          <GalleryCard1
            title="Ropeless Fishing Gear Demonstrator"
            subtitle="Submarine Fishing Gear Project for Robotics MEng project"
            imageSrc="/external/pastedimage-20e-1500h.png"
            rootClassName="rootClassName"
            className="my-work-component7"
          ></GalleryCard1>
        </Link>
      </div>
    </div>
  )
}

export default MyWork
