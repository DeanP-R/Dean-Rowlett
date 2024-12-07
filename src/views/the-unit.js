import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './the-unit.css'

const TheUnit = (props) => {
  return (
    <div className="the-unit-container1">
      <Helmet>
        <title>The-Unit - Dean Rowlett Portfolio</title>
        <meta property="og:title" content="The-Unit - Dean Rowlett Portfolio" />
      </Helmet>
      <div data-role="Header" className="the-unit-navbar-container">
        <div className="the-unit-navbar">
          <Link to="/" className="the-unit-heading1 Card-Heading">
            DeanRowlett
          </Link>
          <div className="the-unit-links-container1">
            <Link to="/my-work" className="the-unit-link1">
              <span className="Card-Heading">My Work</span>
              <br></br>
            </Link>
            <Link to="/about-me" className="Card-Heading">
              About Me
            </Link>
          </div>
          <div data-role="BurgerMenu" className="the-unit-burger-menu">
            <svg viewBox="0 0 1024 1024" className="the-unit-icon10">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="the-unit-mobile-menu">
            <div className="the-unit-container2">
              <Link to="/" className="the-unit-heading2 Card-Heading">
                DeanRowlett
              </Link>
              <div data-role="CloseMobileMenu" className="the-unit-close-menu">
                <svg viewBox="0 0 1024 1024" className="the-unit-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="the-unit-links-container2">
              <Link to="/my-work" className="the-unit-link3 Navbar-Link">
                My Work
              </Link>
              <Link to="/about-me" className="the-unit-link4 Navbar-Link">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="the-unit-section-separator1"></div>
      <div className="the-unit-hero">
        <div className="the-unit-container3">
          <h1 className="the-unit-text12">The Unit</h1>
          <svg viewBox="0 0 1024 1024" className="the-unit-icon14">
            <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264zM469.333 384v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 725.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
          <span>BUILDING IN PROGRESS</span>
          <svg viewBox="0 0 1024 1024" className="the-unit-icon16">
            <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264zM469.333 384v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 725.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
          <span className="the-unit-text14">
            <br></br>
            <span>
              The Unit is a humanoid robot assistant designed to provide users
              with a physical embodiment of the virtual assistant system,
              I.S.A.A.C. The robot is designed from the waist up, with a 3D
              printed head based on the inMoov design and a support frame
              constructed out of Makerbeams. The torso features a screen in the
              chest plate, allowing for visual feedback and interaction with the
              user. The arms are designed on Fusion 360 and 3D printed, with one
              hand featuring five articulated fingers and the other hand
              featuring a mechanical gripper similar to industrial robots.
            </span>
            <br></br>
            <br></br>
            <span>
              By incorporating I.S.A.A.C into The Unit, users can communicate
              with the robot using natural language and receive personalized
              responses. The integration of the virtual assistant system with a
              physical robot provides a unique and engaging experience for
              users. The Unit&apos;s mechanical design also allows for a range
              of physical interactions, such as handing objects to the user or
              gesturing to indicate different responses.
            </span>
            <br></br>
            <br></br>
            <span>
              Overall, The Unit represents a convergence of advanced AI
              technology and innovative mechanical design. It provides a
              tangible and intuitive way for users to interact with I.S.A.A.C,
              and the robot&apos;s physical presence enhances the overall
              experience. The combination of high-tech features and thoughtful
              design makes The Unit a standout project in the field of robotic
              assistants.
            </span>
          </span>
        </div>
        <div className="the-unit-container4">
          <img
            alt="image"
            src="/snapchat-1364024292-200w.jpg"
            className="the-unit-image"
          />
        </div>
      </div>
      <div className="the-unit-section-separator2"></div>
      <div className="the-unit-features">
        <h1 className="the-unit-text23">
          <span>Feature Breakdown</span>
          <br></br>
        </h1>
        <div className="the-unit-container5">
          <FeatureCard2
            title="Humanoid Design"
            description="The Unit is designed to resemble a human from the waist up, providing a familiar and approachable appearance for users."
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="Advanced Construction"
            description="The robot features a 3D printed head based on the inMoov design and a support frame constructed out of Makerbeams, providing a sturdy and customizable structure."
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            title="Interactive Torso"
            description="The Unit's torso features a screen in the chest plate, allowing for visual feedback and interaction with the user, enhancing the overall experience."
            rootClassName="rootClassName2"
          ></FeatureCard2>
          <FeatureCard2
            title="Functional Arms"
            description="The robot's arms are designed on Fusion 360 and 3D printed, with one hand featuring five articulated fingers and the other hand featuring a mechanical gripper, enabling a range of physical interactions with users."
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <div className="the-unit-section-separator3"></div>
      <div className="the-unit-testimonial-card">
        <svg viewBox="0 0 1024 1024" className="the-unit-icon18">
          <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
        </svg>
        <span className="the-unit-text26">
          I&apos;ve always been fascinated by the possibilities of robotics, and
          I believe that humanoid assistants have the potential to greatly
          enhance people&apos;s lives. With The Unit, I&apos;m striving to
          create an advanced, customizable robot that can interact with people
          in a natural and intuitive way. By focusing on the waist-up design and
          incorporating advanced features such as the chest plate screen and
          functional arms, I aim to provide a robot that can serve as a helpful,
          engaging companion for users. This project represents a challenging
          yet rewarding opportunity to explore the intersection of technology
          and humanity, and I&apos;m excited to see where it takes me.
        </span>
        <div className="the-unit-profile">
          <div className="the-unit-container6">
            <img
              alt="pastedImage"
              src="/external/pastedimage-ztd8-200h.png"
              className="the-unit-dean-in-croatia"
            />
            <div className="the-unit-container7">
              <span className="the-unit-text27">Dean Rowlett</span>
              <span className="the-unit-text28">Robotics Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheUnit
