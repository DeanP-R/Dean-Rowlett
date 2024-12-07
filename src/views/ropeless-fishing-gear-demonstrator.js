import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './ropeless-fishing-gear-demonstrator.css'

const RopelessFishingGearDemonstrator = (props) => {
  return (
    <div className="ropeless-fishing-gear-demonstrator-container1">
      <Helmet>
        <title>
          Ropeless-Fishing-Gear-Demonstrator - Dean Rowlett Portfolio
        </title>
        <meta
          property="og:title"
          content="Ropeless-Fishing-Gear-Demonstrator - Dean Rowlett Portfolio"
        />
      </Helmet>
      <div
        data-role="Header"
        className="ropeless-fishing-gear-demonstrator-navbar-container"
      >
        <div className="ropeless-fishing-gear-demonstrator-navbar">
          <Link
            to="/"
            className="ropeless-fishing-gear-demonstrator-heading1 Card-Heading"
          >
            DeanRowlett
          </Link>
          <div className="ropeless-fishing-gear-demonstrator-links-container1">
            <Link
              to="/my-work"
              className="ropeless-fishing-gear-demonstrator-link1"
            >
              <span className="Card-Heading">My Work</span>
              <br></br>
            </Link>
            <Link to="/about-me" className="Card-Heading">
              About Me
            </Link>
          </div>
          <div
            data-role="BurgerMenu"
            className="ropeless-fishing-gear-demonstrator-burger-menu"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="ropeless-fishing-gear-demonstrator-icon1"
            >
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div
            data-role="MobileMenu"
            className="ropeless-fishing-gear-demonstrator-mobile-menu"
          >
            <div className="ropeless-fishing-gear-demonstrator-container2">
              <Link
                to="/"
                className="ropeless-fishing-gear-demonstrator-heading2 Card-Heading"
              >
                DeanRowlett
              </Link>
              <div
                data-role="CloseMobileMenu"
                className="ropeless-fishing-gear-demonstrator-close-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="ropeless-fishing-gear-demonstrator-icon3"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="ropeless-fishing-gear-demonstrator-links-container2">
              <Link
                to="/my-work"
                className="ropeless-fishing-gear-demonstrator-link3 Navbar-Link"
              >
                My Work
              </Link>
              <Link
                to="/about-me"
                className="ropeless-fishing-gear-demonstrator-link4 Navbar-Link"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ropeless-fishing-gear-demonstrator-section-separator1"></div>
      <div className="ropeless-fishing-gear-demonstrator-hero1">
        <div className="ropeless-fishing-gear-demonstrator-container3">
          <h1 className="ropeless-fishing-gear-demonstrator-text12">
            <span>Ropeless Fishing Gear Demonstrator</span>
            <br></br>
          </h1>
          <span className="ropeless-fishing-gear-demonstrator-text15">
            <span>
              The Ropeless Fishing Gear Demonstrator demonstrates an innovative
              addition to the fishing industry, offering a sustainable and
              environmentally conscious alternative to traditional fishing
              methods. Central to this system is a state-of-the-art switchable
              magnet, which allows for the remote release and retrieval of
              fishing gear, drastically reducing the risk of marine life
              entanglement and the environmental impact of underwater lines.
            </span>
            <br></br>
            <br></br>
            <span>
              Engineered with precision, the demonstrator utilises acoustic
              signals, interpreted by an advanced Raspberry Pi microcontroller,
              to command the magnet. This precise control mechanism ensures
              immediate response to release commands, delivering an unmatched
              level of reliability and efficiency in gear management.
            </span>
            <br></br>
            <br></br>
            <span>
              Beyond its innovative release technology, the demonstrator is
              designed to withstand the harsh maritime environment, assuring
              longevity and consistent performance. The integration of robust
              mechanical components with intuitive software creates a
              user-friendly experience, significantly reducing the complexity of
              transition for fishers.
            </span>
            <br></br>
            <br></br>
            <span>
              Installation is designed to be straightforward, requiring minimal
              maintenance and offering ease of use. The Ropeless Fishing Gear
              Demonstrator is not just a piece of equipment but a testament to
              sustainable innovation, propelling the fishing sector towards a
              more responsible future where the balance between economic
              activity and marine conservation is maintained.
            </span>
          </span>
        </div>
        <div className="ropeless-fishing-gear-demonstrator-container4">
          <img
            alt="pastedImage"
            src="/external/pastedimage-5hga-1500h.png"
            className="ropeless-fishing-gear-demonstrator-system-drawing"
          />
          <img
            alt="pastedImage"
            src="/external/pastedimage-20e-500w.png"
            className="ropeless-fishing-gear-demonstrator-cad-model"
          />
        </div>
      </div>
      <div className="ropeless-fishing-gear-demonstrator-section-separator2"></div>
      <div className="ropeless-fishing-gear-demonstrator-hero2">
        <video
          src="/fishing%20gear%20demo.mp4"
          loop="true"
          muted="true"
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          controls="true"
          className="ropeless-fishing-gear-demonstrator-video"
        ></video>
      </div>
      <div className="ropeless-fishing-gear-demonstrator-section-separator3"></div>
      <div className="ropeless-fishing-gear-demonstrator-features">
        <h1 className="ropeless-fishing-gear-demonstrator-text26">
          <span>Feature Breakdown</span>
          <br></br>
        </h1>
        <div className="ropeless-fishing-gear-demonstrator-container5">
          <FeatureCard2
            title="Switchable Magnet Release"
            description="A remotely activated mechanism enabling precise control over fishing gear deployment."
            rootClassName="rootClassName16"
          ></FeatureCard2>
          <FeatureCard2
            title="Acoustic Signal Activation"
            description="Utilises high-frequency sound waves to communicate commands for gear release and retrieval."
            rootClassName="rootClassName17"
          ></FeatureCard2>
          <FeatureCard2
            title="Raspberry Pi Microcontroller"
            description="Serves as the brain of the operation, ensuring real-time processing and responsiveness."
            rootClassName="rootClassName18"
          ></FeatureCard2>
          <FeatureCard2
            title="Robust Design"
            description=" Constructed to endure the challenging marine environment, ensuring durability and reliability."
            rootClassName="rootClassName19"
          ></FeatureCard2>
          <FeatureCard2
            title="User-Friendly Interface"
            description="Simplifies operation via a bespoke mobile app, making gear management efficient and accessible."
            rootClassName="rootClassName21"
          ></FeatureCard2>
          <FeatureCard2
            title="Deep Sleep Functionality"
            description="Conserves energy by entering a low-power state during periods of inactivity."
            rootClassName="rootClassName23"
          ></FeatureCard2>
        </div>
      </div>
      <div className="ropeless-fishing-gear-demonstrator-section-separator4"></div>
      <div className="ropeless-fishing-gear-demonstrator-testimonial-card">
        <svg
          viewBox="0 0 1024 1024"
          className="ropeless-fishing-gear-demonstrator-icon5"
        >
          <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
        </svg>
        <span className="ropeless-fishing-gear-demonstrator-text29">
          Choosing the Ropeless Fishing Gear Demonstrator project was a clear
          decision for my MEng in robotics. It intersects with my academic
          interests and offers practical experience in a field I&apos;m
          passionate about — robotics for sustainable practices. This project
          provides the perfect platform to apply my skills meaningfully and make
          a real-world impact.
        </span>
        <div className="ropeless-fishing-gear-demonstrator-profile">
          <div className="ropeless-fishing-gear-demonstrator-container6">
            <img
              alt="pastedImage"
              src="/external/pastedimage-ztd8-200h.png"
              className="ropeless-fishing-gear-demonstrator-dean-in-croatia"
            />
            <div className="ropeless-fishing-gear-demonstrator-container7">
              <span className="ropeless-fishing-gear-demonstrator-text30">
                Dean Rowlett
              </span>
              <span className="ropeless-fishing-gear-demonstrator-text31">
                Robotics Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RopelessFishingGearDemonstrator
