import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './plant-watering.css'

const PlantWatering = (props) => {
  return (
    <div className="plant-watering-container1">
      <Helmet>
        <title>plant-watering - Dean Rowlett Portfolio</title>
        <meta
          property="og:title"
          content="plant-watering - Dean Rowlett Portfolio"
        />
      </Helmet>
      <div data-role="Header" className="plant-watering-navbar-container">
        <div className="plant-watering-navbar">
          <Link to="/" className="plant-watering-heading1 Card-Heading">
            DeanRowlett
          </Link>
          <div className="plant-watering-links-container1">
            <Link to="/my-work" className="plant-watering-link1">
              <span className="Card-Heading">My Work</span>
              <br></br>
            </Link>
            <Link to="/about-me" className="Card-Heading">
              About Me
            </Link>
          </div>
          <div data-role="BurgerMenu" className="plant-watering-burger-menu">
            <svg viewBox="0 0 1024 1024" className="plant-watering-icon1">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="plant-watering-mobile-menu">
            <div className="plant-watering-container2">
              <Link to="/" className="plant-watering-heading2 Card-Heading">
                DeanRowlett
              </Link>
              <div
                data-role="CloseMobileMenu"
                className="plant-watering-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="plant-watering-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="plant-watering-links-container2">
              <Link to="/my-work" className="plant-watering-link3 Navbar-Link">
                My Work
              </Link>
              <Link to="/about-me" className="plant-watering-link4 Navbar-Link">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="plant-watering-section-separator1"></div>
      <div className="plant-watering-hero">
        <div className="plant-watering-container3">
          <h1 className="plant-watering-text12">Plant Watering System</h1>
          <span className="plant-watering-text13">
            <span>
              The automated plant watering project is a cutting-edge system
              designed to help plant lovers keep their flora healthy and vibrant
              even when they are away. The system employs a unique combination
              of multiple hydrometer sensors and Arduino Uno R3 microcontrollers
              to monitor the soil moisture of up to four plants at a time. The
              sensors collect data on the moisture levels of the soil, which is
              processed by the microcontroller through its internal ADC. The
              data is then compared against the lower limit of soil moisture,
              and if it falls below the desired level, the system triggers the
              appropriate water pump for a pre-determined amount of time,
              depending on the size of the plant.
            </span>
            <br></br>
            <br></br>
            <span>
              The project was created to address the challenges faced by plant
              enthusiasts who have to travel frequently, leaving their plants
              unattended for days. With the automated plant watering system,
              users can rest easy knowing that their plants are being taken care
              of, even when they are not present. The system is easy to install
              and requires minimal maintenance, making it an ideal solution for
              anyone who wants to keep their plants healthy and thriving without
              the hassle of daily watering. Overall, this project offers an
              innovative solution to an age-old problem and has the potential to
              revolutionize the way we care for our plants.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwcGxhbnR8ZW58MHx8fHwxNjI2MTgyODMw&amp;ixlib=rb-1.2.1&amp;w=1500"
          className="plant-watering-image"
        />
      </div>
      <div className="plant-watering-section-separator2"></div>
      <div className="plant-watering-features">
        <h1 className="plant-watering-text18">
          <span>Feature Breakdown</span>
          <br></br>
        </h1>
        <div className="plant-watering-container4">
          <FeatureCard2
            title="Dual Microcontroller Control"
            description="The system is controlled by two Arduino Uno R3 microcontrollers that allow for precise monitoring and control of up to four plants simultaneously."
            rootClassName="rootClassName4"
          ></FeatureCard2>
          <FeatureCard2
            title="Multiple Hydrometer Sesnors"
            description=" The unit uses multiple sensors to monitor soil moisture levels, providing accurate and reliable data on the moisture needs of each plant."
            rootClassName="rootClassName5"
          ></FeatureCard2>
          <FeatureCard2
            title="Customisable Watering Cycles"
            description="The system triggers the appropriate water pump for a pre-determined amount of time, depending on the size of the plant, ensuring that each plant receives the right amount of water."
            rootClassName="rootClassName6"
          ></FeatureCard2>
          <FeatureCard2
            title="Hassle-free Plant Care"
            description="The automated plant watering unit is an ideal solution for anyone who wants to keep their plants healthy and vibrant without the hassle of daily watering. It requires minimal maintenance and can help simplify plant care for busy individuals."
            rootClassName="rootClassName7"
          ></FeatureCard2>
        </div>
      </div>
      <div className="plant-watering-section-separator3"></div>
      <div className="plant-watering-testimonial-card">
        <svg viewBox="0 0 1024 1024" className="plant-watering-icon5">
          <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
        </svg>
        <span className="plant-watering-text21">
          My partner is an avid plant lover who frequently travels for work. I
          noticed that she struggled to keep her plants healthy while away,
          often returning to wilted or dried out flora. As an engineer, I wanted
          to create a solution that would allow her to care for her plants
          remotely. I used my expertise in microcontrollers and hydrometer
          sensors to design an automated plant watering system that could
          monitor soil moisture levels and trigger water pumps as needed. The
          system is low-maintenance and customizable, ensuring that her plants
          receive the right amount of water even when she&apos;s not around to
          water them herself. I&apos;m proud to have created a solution that
          helps her pursue her passion for plants while also simplifying her
          busy lifestyle.
        </span>
        <div className="plant-watering-profile">
          <div className="plant-watering-container5">
            <img
              alt="pastedImage"
              src="/external/pastedimage-ztd8-200h.png"
              className="plant-watering-dean-in-croatia"
            />
            <div className="plant-watering-container6">
              <span className="plant-watering-text22">Dean Rowlett</span>
              <span className="plant-watering-text23">Robotics Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantWatering
