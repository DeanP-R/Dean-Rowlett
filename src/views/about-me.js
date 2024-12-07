import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about-me.css'

const AboutMe = (props) => {
  return (
    <div className="about-me-container1">
      <Helmet>
        <title>About-me - Dean Rowlett Portfolio</title>
        <meta property="og:title" content="About-me - Dean Rowlett Portfolio" />
      </Helmet>
      <div data-role="Header" className="about-me-navbar-container">
        <div className="about-me-navbar">
          <Link to="/" className="about-me-heading1 Card-Heading">
            DeanRowlett
          </Link>
          <div className="about-me-links-container1">
            <Link to="/my-work" className="about-me-link1 Navbar-Link">
              My Work
            </Link>
          </div>
          <div data-role="BurgerMenu" className="about-me-burger-menu">
            <svg viewBox="0 0 1024 1024" className="about-me-icon10">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="about-me-mobile-menu">
            <div className="about-me-container2">
              <Link to="/" className="Card-Heading about-me-heading2">
                DeanRowlett
              </Link>
              <div data-role="CloseMobileMenu" className="about-me-close-menu">
                <svg viewBox="0 0 1024 1024" className="about-me-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="about-me-links-container2">
              <Link to="/my-work" className="about-me-link2 Navbar-Link">
                My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me-hero">
        <h1 className="about-me-text1">
          <br></br>
          <span>About me</span>
          <br></br>
        </h1>
        <div className="about-me-container3">
          <span className="about-me-text5">
            As a highly motivated, approachable, and confident engineer, I am
            committed to expanding my knowledge and skills both in my
            professional and personal life. With five years of hands-on
            experience working with a diverse range of customers and handling
            various challenges, I am currently pursuing my fourth year in
            Robotics, Autonomous, and Interactive Systems MEng at Heriot-Watt
            University. My academic background also includes an HND in Advanced
            Industrial Automation Engineering with Robotics (Mechatronics) from
            City of Glasgow College, where I received an AA grade. My passion
            for engineering is reflected in my academics and extracurricular
            activities, such as my involvement in HWRacing Team and
            co-presidency of the Heriot-Watt Robot Wars Society. My expertise
            encompasses closed loop and robotic systems engineering, embedded
            systems design, programming languages including Python, C, C++, and
            Java, and electrical and electronic engineering. These
            qualifications, experiences, and personal interests demonstrate my
            strong commitment and enthusiasm for the field of engineering.
          </span>
          <img
            alt="pastedImage"
            src="/external/pastedimage-0s8-200w.png"
            className="about-me-pasted-image"
          />
        </div>
      </div>
      <div className="about-me-social-bar">
        <svg viewBox="0 0 877.7142857142857 1024" className="about-me-icon14">
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <Link to="/" className="about-me-navlink">
          <svg viewBox="0 0 877.7142857142857 1024" className="about-me-icon16">
            <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
          </svg>
        </Link>
        <a
          href="https://linkedin.com/in/dean-rowlett"
          target="_blank"
          rel="noreferrer noopener"
          className="about-me-link3"
        >
          <svg viewBox="0 0 877.7142857142857 1024" className="about-me-icon18">
            <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default AboutMe
