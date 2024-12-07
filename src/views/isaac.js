import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './isaac.css'

const Isaac = (props) => {
  return (
    <div className="isaac-container1">
      <Helmet>
        <title>Isaac - Dean Rowlett Portfolio</title>
        <meta property="og:title" content="Isaac - Dean Rowlett Portfolio" />
      </Helmet>
      <div data-role="Header" className="isaac-navbar-container">
        <div className="isaac-navbar">
          <Link to="/" className="isaac-heading1 Card-Heading">
            DeanRowlett
          </Link>
          <div className="isaac-links-container1">
            <Link to="/my-work" className="isaac-link1">
              <span className="Card-Heading">My Work</span>
              <br></br>
            </Link>
            <Link to="/about-me" className="Card-Heading">
              About Me
            </Link>
          </div>
          <div data-role="BurgerMenu" className="isaac-burger-menu">
            <svg viewBox="0 0 1024 1024" className="isaac-icon10">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="isaac-mobile-menu">
            <div className="isaac-container2">
              <Link to="/" className="isaac-heading2 Card-Heading">
                DeanRowlett
              </Link>
              <div data-role="CloseMobileMenu" className="isaac-close-menu">
                <svg viewBox="0 0 1024 1024" className="isaac-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="isaac-links-container2">
              <Link to="/my-work" className="isaac-link3 Navbar-Link">
                My Work
              </Link>
              <Link to="/about-me" className="isaac-link4 Navbar-Link">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="isaac-section-separator1"></div>
      <div className="isaac-hero">
        <div className="isaac-container3">
          <h1 className="isaac-text12">I.S.A.A.C.</h1>
          <svg viewBox="0 0 1024 1024" className="isaac-icon14">
            <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264zM469.333 384v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 725.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
          <span>BUILDING IN PROGRESS</span>
          <svg viewBox="0 0 1024 1024" className="isaac-icon16">
            <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264zM469.333 384v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 725.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
          <span className="isaac-text14">
            <br></br>
            <span>
              I.S.A.A.C. is a virtual assistant system that leverages
              OpenAI&apos;s &apos;davinci-003&apos; AI model to generate text
              responses based on user input. The system allows for the creation
              of a unique personality for each agent by using specific text
              files as context for the AI prompt.
            </span>
            <br></br>
            <br></br>
            <span>
              The system comprises several Python files, including ai.py,
              isaac.py, and isaac_GUI.py, as well as a text file, isaac.txt. The
              ai.py file houses the &apos;generate_response&apos; function,
              which sets up the OpenAI communication settings and inputs the
              user&apos;s input and the agent&apos;s personality to produce a
              response. The isaac.py file is used to establish a graphical user
              interface (GUI) for users to communicate with I.S.A.A.C, create a
              personality brief, and obtain immediate responses. The
              isaac_GUI.py file is an old GUI class initially made for I.S.A.A.C
              but now being reused as a general-purpose GUI class for any
              intended AI.
            </span>
            <br></br>
            <br></br>
            <span>
              The isaac.txt file contains the information relevant to
              I.S.A.A.C&apos;s personality generation. This file is converted
              into a string and provided to the AI model as context for
              generating the response.
            </span>
            <br></br>
            <br></br>
            <span>
              Overall, the I.S.A.A.C. virtual assistant system offers users a
              personalized experience through the creation of a unique
              personality for I.S.A.A.C. The system&apos;s GUI makes it easy for
              users to communicate with I.S.A.A.C, and a complete log of user/AI
              interactions is printed to the command console.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwcGxhbnR8ZW58MHx8fHwxNjI2MTgyODMw&amp;ixlib=rb-1.2.1&amp;w=1500"
          className="isaac-image"
        />
      </div>
      <div className="isaac-section-separator2"></div>
      <div className="isaac-features">
        <h1 className="isaac-text26">
          <span>Feature Breakdown</span>
          <br></br>
        </h1>
        <div className="isaac-container4">
          <FeatureCard2
            description="I.S.A.A.C is a virtual assistant system that utilizes OpenAI's 'davinci-003' AI model to generate text responses based on user input."
            rootClassName="rootClassName8"
          ></FeatureCard2>
          <FeatureCard2
            title="Unique Personality"
            description="Allows for the creation of a unique personality for I.S.A.A.C by using specific text files as context for the AI prompt."
            rootClassName="rootClassName9"
          ></FeatureCard2>
          <FeatureCard2
            title="GUI"
            description="The system has a graphical user interface (GUI) that allows users to communicate with I.S.A.A.C, create a personality brief, and obtain immediate responses."
            rootClassName="rootClassName10"
          ></FeatureCard2>
          <FeatureCard2
            title="Complete Log"
            description="The system records a complete log of user/AI interactions, which is printed to the command console."
            rootClassName="rootClassName11"
          ></FeatureCard2>
        </div>
      </div>
      <div className="isaac-section-separator3"></div>
      <div className="isaac-testimonial-card">
        <svg viewBox="0 0 1024 1024" className="isaac-icon18">
          <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
        </svg>
        <span className="isaac-text29">
          As a software developer, I had previously created a rule-based chatbot
          called I.S.A.A.C, but I was eager to take the project to the next
          level by incorporating advanced AI capabilities. When OpenAI released
          their &apos;davinci-003&apos; AI model, I was intrigued by its ability
          to generate coherent and human-like text responses based on prompts.
          This inspired me to develop I.S.A.A.C_2.0, a virtual assistant system
          that utilizes the &apos;davinci-003&apos; model to provide users with
          highly personalized and intelligent responses. I was excited by the
          idea of using specific text files to create unique personalities for
          each agent and integrating a user-friendly graphical user interface
          (GUI) to make communicating with I.S.A.A.C as effortless as possible.
          My primary objective was to push the boundaries of what was possible
          with AI technology and create an engaging and personalized experience
          for users.
        </span>
        <div className="isaac-profile">
          <div className="isaac-container5">
            <img
              alt="pastedImage"
              src="/external/pastedimage-ztd8-200h.png"
              className="isaac-dean-in-croatia"
            />
            <div className="isaac-container6">
              <span className="isaac-text30">Dean Rowlett</span>
              <span className="isaac-text31">Robotics Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Isaac
