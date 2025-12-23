import React from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/about.css'
import aboutImg from '../assets/images/guide.png'

const About = () => {
  return (
    <>
      <CommonSection title="About Us" />

      <section className="about">
        <div className="about__container">

          {/* LEFT IMAGE */}
          <div className="about__image">
            <img src={aboutImg} alt="about us" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about__content">
            <h2>Welcome to TravelXpress</h2>

            <p>
              TravelXpress is a trusted travel platform that helps people
              explore beautiful destinations with comfort, safety, and joy.
              We believe traveling should be easy, affordable, and memorable.
            </p>

            <p>
              From adventure trips to relaxing holidays, our goal is to give
              you the best travel experience with carefully planned tours,
              professional guides, and excellent customer support.
            </p>

            <div className="about__features">
              <span>✔ Best Price Guarantee</span>
              <span>✔ Handpicked Tours</span>
              <span>✔ Trusted Tour Guides</span>
              <span>✔ 24/7 Customer Support</span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About
