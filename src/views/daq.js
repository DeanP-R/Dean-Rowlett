import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './daq.css'

const DAQ = (props) => {
  return (
    <div className="daq-container1">
      <Helmet>
        <title>DAQ - Dean Rowlett Portfolio</title>
        <meta property="og:title" content="DAQ - Dean Rowlett Portfolio" />
      </Helmet>
      <div data-role="Header" className="daq-navbar-container">
        <div className="daq-navbar">
          <Link to="/" className="daq-heading1 Card-Heading">
            DeanRowlett
          </Link>
          <div className="daq-links-container1">
            <Link to="/my-work" className="daq-link1">
              <span className="Card-Heading">My Work</span>
              <br></br>
            </Link>
            <Link to="/about-me" className="Card-Heading">
              About Me
            </Link>
          </div>
          <div data-role="BurgerMenu" className="daq-burger-menu">
            <svg viewBox="0 0 1024 1024" className="daq-icon10">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="daq-mobile-menu">
            <div className="daq-container2">
              <Link to="/" className="daq-heading2 Card-Heading">
                DeanRowlett
              </Link>
              <div data-role="CloseMobileMenu" className="daq-close-menu">
                <svg viewBox="0 0 1024 1024" className="daq-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="daq-links-container2">
              <Link to="/my-work" className="daq-link3 Navbar-Link">
                My Work
              </Link>
              <Link to="/about-me" className="daq-link4 Navbar-Link">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="daq-section-separator1"></div>
      <div className="daq-hero">
        <div className="daq-container3">
          <h1 className="daq-text12">Data Acquisition System</h1>
          <svg viewBox="0 0 1024 1024" className="daq-icon14">
            <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264zM469.333 384v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 725.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
          <span>BUILDING IN PROGRESS</span>
          <svg viewBox="0 0 1024 1024" className="daq-icon16">
            <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264zM469.333 384v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 725.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
          <span className="daq-text14">
            <br></br>
            <span>
              The HWR-12 Data Acquisition System is being developed for
              installation onto the HWR-12 formula student entry. This art
              system is designed to receive and log a combination of analogue
              and digital signals from onboard sensors, providing users with
              valuable information about the car&apos;s performance.
            </span>
            <br></br>
            <br></br>
            <span>
              The system features a robust circuit design that meets relevant
              safety regulations, ensuring users can safely operate the system.
              While the system is not considered to be safety-critical, it
              follows the relevant guidelines and regulations related to
              electrical design and installation.
            </span>
            <br></br>
            <br></br>
            <span>
              Designed to meet the sensor requirements of the HWR-12 formula
              student entry, the system provides users with the flexibility to
              expand and future-proof the system. It has an agreed block diagram
              and detailed system requirements that guide the design process.
            </span>
            <br></br>
            <br></br>
            <span>
              The HWR-12 Data Acquisition System is easy to install and use,
              featuring a housing enclosure for the entire system to ensure its
              durability. The system is also designed to receive, and log
              additional sensor information sent from the VCU.
            </span>
            <br></br>
            <br></br>
            <span>
              The system is budgeted to meet the cost of additional hardware and
              materials needed to ensure project objectives are met. While there
              are several time objectives to be met during the project,
              including creating a working prototype by mid-January and
              completing the final design report for the final comptetition in
              July, the focus of the system is on its innovative technology and
              usability.
            </span>
            <br></br>
            <br></br>
            <span>
              Overall, the HWR-12 Data Acquisition System is an exceptional
              addition to any car&apos;s performance monitoring system. Its
              features, usability, and innovative technology make it a testament
              to the skills of the design team, who have delivered a
              high-quality product that meets the requirements of the client
              while adhering to relevant safety regulations.
            </span>
          </span>
        </div>
        <img
          alt="pastedImage"
          src="/external/pastedimage-q26g-500h.png"
          className="daqhw-racing"
        />
      </div>
      <div className="daq-section-separator2"></div>
      <div className="daq-features">
        <h1 className="daq-text32">
          <span>Feature Breakdown</span>
          <br></br>
        </h1>
        <div className="daq-container4">
          <FeatureCard2
            title="Comprehensive Data Logging"
            description="The system receives and logs a combination of analogue and digital signals from onboard sensors, providing a complete overview of the vehicle's performance."
            rootClassName="rootClassName12"
          ></FeatureCard2>
          <FeatureCard2
            title="Robust Safety Compliance"
            description="The system follows relevant safety guidelines and regulations related to electrical design and installation, ensuring that it is safe to use and operate."
            rootClassName="rootClassName13"
          ></FeatureCard2>
          <FeatureCard2
            title="Customisable Design"
            description="The system is designed to meet the sensor requirements of the HWR-12 formula student entry, with potential for future expansion, allowing for maximum flexibility and customization."
            rootClassName="rootClassName14"
          ></FeatureCard2>
          <FeatureCard2
            title="Easy to use and Install"
            description="Featuring a durable housing enclosure and compatibility with additional sensor information sent from the VCU, the HWR-12 Data Acquisition System is easy to install and use, making it an ideal choice for racing teams and other high-performance applications."
            rootClassName="rootClassName15"
          ></FeatureCard2>
        </div>
      </div>
      <div className="daq-section-separator3"></div>
      <div className="daq-testimonial-card">
        <svg viewBox="0 0 1024 1024" className="daq-icon18">
          <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
        </svg>
        <span className="daq-text35">
          As a member of the HWRacing team, I am developing this project because
          it is an incredibly valuable opportunity for me to gain hands-on
          experience in a field that I am deeply passionate about. Being a part
          of this team means that I have the chance to work alongside
          like-minded individuals who share my interest in F1, and to learn from
          some of the best and brightest minds at Heriot-Watt. For me, this
          project represents the chance to put my skills and knowledge to the
          test, to challenge myself in new and exciting ways, and to contribute
          to a project that has the potential to make a real impact in the world
          of motorsport.
        </span>
        <div className="daq-profile">
          <div className="daq-container5">
            <img
              alt="pastedImage"
              src="/external/pastedimage-ztd8-200h.png"
              className="daq-dean-in-croatia"
            />
            <div className="daq-container6">
              <span className="daq-text36">Dean Rowlett</span>
              <span className="daq-text37">Robotics Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DAQ
