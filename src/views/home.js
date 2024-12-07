import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Dean Rowlett Portfolio</title>
        <meta property="og:title" content="Dean Rowlett Portfolio" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <span className="Card-Heading home-heading1">DeanRowlett</span>
          <div className="home-links-container1">
            <a href="#Summary" className="home-link1 Navbar-Link">
              Summary
            </a>
            <a href="#fields" className="home-link2 Navbar-Link">
              Skills
            </a>
            <a href="#experience" className="home-link3 Navbar-Link">
              Experience
            </a>
            <a href="#Projects" className="home-link4 Navbar-Link">
              Projects
            </a>
            <a href="#contact" className="home-link5 Navbar-Link">
              Contact
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container2">
              <Link to="/" className="home-heading2 Card-Heading">
                DeanRowlett
              </Link>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container2">
              <Link to="/my-work" className="home-link6 Navbar-Link">
                My Work
              </Link>
              <Link to="/about-me" className="home-link7 Navbar-Link">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div id="Summary" className="home-summary">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <span className="home-text10 Section-Text">
              As a student pursuing a degree in Robotics, I am deeply invested
              in the fields of Electro-mechanical, Robotics and Software
              Development. My passion for engineering and personal projects
              stems from my educational background, including a past
              qualification from City of Glasgow College with a distinction
              grade. I am eager to continue exploring new frontiers in these
              areas and finding creative solutions to complex challenges.
            </span>
            <div className="home-cta-btn-container">
              <Link to="/my-work" className="home-cta-btn1 Anchor button">
                <span className="home-text11">MY WORK</span>
              </Link>
              <Link to="/about-me" className="home-cta-btn2 Anchor button">
                ABOUT ME
              </Link>
            </div>
          </div>
          <div className="home-me">
            <img
              alt="image"
              src="/dean%20on%20ben%20lommond-600w.jpeg"
              className="home-image1"
            />
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div id="fields" className="home-fields">
        <div className="home-heading-container1">
          <h2 className="home-text12 Section-Heading">
            <br></br>
            <span>Engineering Specialities</span>
          </h2>
        </div>
        <div className="home-cards-container">
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg viewBox="0 0 1097.142857142857 1024" className="home-icon14">
                <path d="M512 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM950.857 804.571c0-40-33.143-73.143-73.143-73.143s-73.143 33.143-73.143 73.143c0 40.571 33.143 73.143 73.143 73.143 40.571 0 73.143-33.143 73.143-73.143zM950.857 219.429c0-40-33.143-73.143-73.143-73.143s-73.143 33.143-73.143 73.143c0 40.571 33.143 73.143 73.143 73.143 40.571 0 73.143-33.143 73.143-73.143zM731.429 460v105.714c0 7.429-5.714 16-13.143 17.143l-88.571 13.714c-4.571 14.857-10.857 29.143-18.286 43.429 16 22.857 33.143 44 51.429 65.714 2.286 3.429 4 6.857 4 11.429 0 4-1.143 8-4 10.857-11.429 15.429-75.429 85.143-92 85.143-4.571 0-8.571-1.714-12-4l-65.714-51.429c-14.286 7.429-28.571 13.143-44 17.714-2.857 29.143-5.714 60.571-13.143 88.571-2.286 8-9.143 13.714-17.143 13.714h-106.286c-8 0-16-6.286-17.143-14.286l-13.143-87.429c-14.857-4.571-29.143-10.857-42.857-17.714l-67.429 50.857c-2.857 2.857-7.429 4-11.429 4-4.571 0-8.571-1.714-12-4.571-14.857-13.714-82.286-74.857-82.286-91.429 0-4 1.714-7.429 4-10.857 16.571-21.714 33.714-42.857 50.286-65.143-8-15.429-14.857-30.857-20-46.857l-86.857-13.714c-8-1.143-13.714-8.571-13.714-16.571v-105.714c0-7.429 5.714-16 13.143-17.143l88.571-13.714c4.571-14.857 10.857-29.143 18.286-43.429-16-22.857-33.143-44-51.429-65.714-2.286-3.429-4-7.429-4-11.429s1.143-8 4-11.429c11.429-15.429 75.429-84.571 92-84.571 4.571 0 8.571 1.714 12 4l65.714 51.429c14.286-7.429 28.571-13.143 44-18.286 2.857-28.571 5.714-60 13.143-88 2.286-8 9.143-13.714 17.143-13.714h106.286c8 0 16 6.286 17.143 14.286l13.143 87.429c14.857 4.571 29.143 10.857 42.857 17.714l67.429-50.857c3.429-2.857 7.429-4 11.429-4 4.571 0 8.571 1.714 12 4.571 14.857 13.714 82.286 75.429 82.286 91.429 0 4-1.714 7.429-4 10.857-16.571 22.286-33.714 42.857-49.714 65.143 7.429 15.429 14.286 30.857 19.429 46.857l86.857 13.143c8 1.714 13.714 9.143 13.714 17.143zM1097.143 764.571v80c0 8.571-73.714 16.571-85.143 17.714-4.571 10.857-10.286 20.571-17.143 29.714 5.143 11.429 29.143 68.571 29.143 78.857 0 1.714-0.571 2.857-2.286 4-6.857 4-68 40.571-70.857 40.571-7.429 0-50.286-57.143-56-65.714-5.714 0.571-11.429 1.143-17.143 1.143s-11.429-0.571-17.143-1.143c-5.714 8.571-48.571 65.714-56 65.714-2.857 0-64-36.571-70.857-40.571-1.714-1.143-2.286-2.857-2.286-4 0-9.714 24-67.429 29.143-78.857-6.857-9.143-12.571-18.857-17.143-29.714-11.429-1.143-85.143-9.143-85.143-17.714v-80c0-8.571 73.714-16.571 85.143-17.714 4.571-10.286 10.286-20.571 17.143-29.714-5.143-11.429-29.143-69.143-29.143-78.857 0-1.143 0.571-2.857 2.286-4 6.857-3.429 68-40 70.857-40 7.429 0 50.286 56.571 56 65.143 5.714-0.571 11.429-1.143 17.143-1.143s11.429 0.571 17.143 1.143c16-22.286 33.143-44.571 52.571-64l3.429-1.143c2.857 0 64 36 70.857 40 1.714 1.143 2.286 2.857 2.286 4 0 10.286-24 67.429-29.143 78.857 6.857 9.143 12.571 19.429 17.143 29.714 11.429 1.143 85.143 9.143 85.143 17.714zM1097.143 179.429v80c0 8.571-73.714 16.571-85.143 17.714-4.571 10.857-10.286 20.571-17.143 29.714 5.143 11.429 29.143 68.571 29.143 78.857 0 1.714-0.571 2.857-2.286 4-6.857 4-68 40.571-70.857 40.571-7.429 0-50.286-57.143-56-65.714-5.714 0.571-11.429 1.143-17.143 1.143s-11.429-0.571-17.143-1.143c-5.714 8.571-48.571 65.714-56 65.714-2.857 0-64-36.571-70.857-40.571-1.714-1.143-2.286-2.857-2.286-4 0-9.714 24-67.429 29.143-78.857-6.857-9.143-12.571-18.857-17.143-29.714-11.429-1.143-85.143-9.143-85.143-17.714v-80c0-8.571 73.714-16.571 85.143-17.714 4.571-10.286 10.286-20.571 17.143-29.714-5.143-11.429-29.143-69.143-29.143-78.857 0-1.143 0.571-2.857 2.286-4 6.857-3.429 68-40 70.857-40 7.429 0 50.286 56.571 56 65.143 5.714-0.571 11.429-1.143 17.143-1.143s11.429 0.571 17.143 1.143c16-22.286 33.143-44.571 52.571-64l3.429-1.143c2.857 0 64 36 70.857 40 1.714 1.143 2.286 2.857 2.286 4 0 10.286-24 67.429-29.143 78.857 6.857 9.143 12.571 19.429 17.143 29.714 11.429 1.143 85.143 9.143 85.143 17.714z"></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading3 Card-Heading">
                Mechanical Engineering
              </span>
              <span className="home-text15 Card-Text">
                I am skilled in mechanical design and proficient in designing
                components and systems that can withstand the stress and rigors
                of mechanical movements required in robotics engineering.
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 1024 1024" className="home-icon16">
                <path d="M976 768h-16v-208c0-61.756-50.242-112-112-112h-272v-128h16c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h16v128h-272c-61.756 0-112 50.244-112 112v208h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-192h256v192h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-192h256v192h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48zM192 960h-128v-128h128v128zM576 960h-128v-128h128v128zM448 256v-128h128v128h-128zM960 960h-128v-128h128v128z"></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading4 Card-Heading">
                Electrical and Electronic Engineering
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text16 Card-Text">
                I have a solid background in electrical and electronic
                engineering and is adept in designing and troubleshooting
                electrical systems in robotics engineering, including embedded
                systems design, low level digital design, and closed
                loop/robotic systems engineering.
              </span>
            </div>
          </div>
          <div className="home-card3">
            <div className="home-icon-container3">
              <svg viewBox="0 0 1024 1024" className="home-icon18">
                <path d="M170 256v426h684v-426h-684zM854 768h170v86h-1024v-86h170q-34 0-59-26t-25-60v-426q0-34 25-60t59-26h684q34 0 59 26t25 60v426q0 34-25 60t-59 26z"></path>
              </svg>
            </div>
            <div className="home-content-container3">
              <span className="home-heading5 Card-Heading">
                Computer Science and Software Engineering
              </span>
              <span className="home-text17 Card-Text">
                I have experience in computer science and software engineering
                and am proficient in programming languages such as Python, C,
                C++, and Java. I am capable of designing and developing software
                for robotic systems, including artificial intelligence
                algorithms, control software, and user interfaces.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div id="experience" className="home-professional-experience">
        <div className="home-max-content-width-container">
          <div className="home-heading-container2">
            <h1 className="Section-Heading home-text18">
              Professional experience
            </h1>
          </div>
          <div className="home-content-container4">
            <div className="home-about11">
              <div className="home-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text19 Card-Text">
                  Successfully managed a high-volume pub, overseeing all aspects
                  of day-to-day operations including staffing, inventory
                  management, customer service, and financial reporting.
                </span>
              </div>
              <div className="home-container4">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text20 Card-Text">
                  Skilled in closed loop/robotic systems engineering, embedded
                  systems design, electrical and electronic engineering, low
                  level digital design, and people management
                </span>
              </div>
              <div className="home-container5">
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text21 Card-Text">
                  Strong interpersonal skills and natural approachability
                </span>
              </div>
            </div>
            <div className="home-about12">
              <div className="home-container6">
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text22 Card-Text">
                  <span>
                    AA grade HND in Advanced Industrial Automation Engineering
                    with Robotics (Mechatronics) from City of Glasgow College.
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container7">
                <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text26 Card-Text">
                  Currently working as a team leader at a pub, responsible for
                  leading a team of employees in delivering exceptional customer
                  service, managing inventory, and ensuring efficient operation
                  of the establishment.
                </span>
              </div>
              <div className="home-container8">
                <svg viewBox="0 0 1024 1024" className="home-icon30">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text27">
                  <span className="Card-Text">
                    Co-President and founding member of Heriot-Watt Robot Wars
                    Society and active member of HWRacing.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <Link to="/my-work" className="home-navlink Anchor button">
            CHECK MY WORK
          </Link>
        </div>
      </div>
      <div className="home-section-separator4"></div>
      <div id="Projects" className="home-projects">
        <div className="home-heading-container3">
          <h1 className="home-text31 Section-Heading">
            <br></br>
            <span>Project Updates</span>
            <br></br>
          </h1>
          <span className="home-text35">
            <span>A brief overview</span>
            <br></br>
            <span>of some of my ongoing projects.</span>
            <br></br>
          </span>
        </div>
        <div className="home-logo-container">
          <img
            alt="image"
            src="/external/pastedimage-20e-200h.png"
            className="home-image2"
          />
          <img
            alt="image"
            src="/real_cad-200h.png"
            className="home-finalfreddy"
          />
          <img
            alt="image"
            src="/snapchat-1364024292-300w.jpg"
            className="home-image3"
          />
          <img
            alt="image"
            src="/snapchat-1612907981-300w.jpg"
            className="home-image4"
          />
          <img
            alt="image"
            src="/img-20230324-wa0000-300w.jpg"
            className="home-image5"
          />
        </div>
      </div>
      <div className="home-section-separator5"></div>
      <div id="contact" className="home-get-in-touch">
        <h2 className="home-text40 SoftwareDevelopment">Get in touch</h2>
        <div className="home-content-container5">
          <span className="home-text41">
            <span className="Section-Text home-text42">
              {' '}
              Thank you for your interest in my work. Please feel free to reach
              out to me via the contact form, email or LinkedIn. I&apos;ll do my
              best to respond promptly and look forward to connecting with you. 
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span> </span>
            <br></br>
          </span>
          <div className="home-form-container">
            <label className="home-heading6 BigCard-Heading">
              Send me a message
            </label>
            <form
              action="https://formspree.io/f/mrgvovne"
              method="POST"
              enctype="application/x-www-form-urlencoded"
              className="home-form"
            >
              <input
                type="text"
                name="name"
                required="true"
                placeholder="Name"
                className="home-name input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="home-message textarea input"
              ></textarea>
              <button
                name="submit"
                type="submit"
                className="home-cta-btn3 Anchor button"
              >
                SEND
              </button>
            </form>
          </div>
          <div className="home-locations-container">
            <div className="home-location1">
              <span className="home-heading7">Edinburgh, UK</span>
              <div className="home-address">
                <svg viewBox="0 0 1024 1024" className="home-icon32">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span>Heriot-Watt University</span>
              </div>
              <div className="home-email">
                <svg viewBox="0 0 1024 1024" className="home-icon34">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span>dpr2000@hw.ac.uk</span>
              </div>
              <div className="home-phone">
                <a
                  href="https://linkedin.com/in/dean-rowlett"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link8"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon36"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/dean-rowlett"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link9"
                >
                  <span>LinkedIn</span>
                  <br></br>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
