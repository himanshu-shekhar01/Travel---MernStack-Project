import React from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/about.css";
import aboutImg from "../assets/images/logo.png";

const About = () => {
  return (
    <>
      <CommonSection title="About Us" />

      {/* ===== INTRO SECTION ===== */}
      <section className="about">
        <div className="about__container">

          {/* LEFT IMAGE */}
          <div className="about__image">
            <img src={aboutImg} alt="TravelXpress" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about__content">
            <h2>Welcome to TravelXpress</h2>

            <li>
              TravelXpress is a modern travel booking platform designed to help
              people explore the world with comfort, safety, and confidence.
              We believe travel should be simple, affordable, and unforgettable.
            </li>

            <li>
              Whether you are planning an adventure trip, a family vacation, or
              a peaceful getaway, TravelXpress connects you with trusted tours,
              expert guides, and seamless booking experiences.
            </li>

            <li>
              Our mission is to make travel accessible for everyone while
              delivering quality service and unforgettable memories.
            </li>
          </div>

        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <h2 className="section__title">Why Choose TravelXpress?</h2>
      <section className="features">
        <div className="features__grid">

          <div className="feature_card">
            <i className="ri-price-tag-3-line"></i>
            <h4>Best Price Guarantee</h4>
            <p>
              We provide competitive prices with complete transparency, ensuring
              you always get the best value for your money.
            </p>
          </div>

          <div className="feature_card">
            <i className="ri-map-pin-line"></i>
            <h4>Handpicked Tours</h4>
            <p>
              Every tour is carefully curated by our experts to ensure high
              quality experiences and memorable journeys.
            </p>
          </div>

          <div className="feature_card">
            <i className="ri-user-star-line"></i>
            <h4>Trusted Tour Guides</h4>
            <p>
              Our guides are experienced, friendly, and trained to make your
              trip informative, safe, and enjoyable.
            </p>
          </div>

          <div className="feature_card">
            <i className="ri-customer-service-2-line"></i>
            <h4>24/7 Customer Support</h4>
            <p>
              Our dedicated support team is available anytime to assist you
              before, during, and after your journey.
            </p>
          </div>

        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats">
        <div className="stats__grid">

          <div className="stat_box">
            <h3>10K+</h3>
            <p>Happy Travelers</p>
          </div>

          <div className="stat_box">
            <h3>500+</h3>
            <p>Verified Tours</p>
          </div>

          <div className="stat_box">
            <h3>100+</h3>
            <p>Trusted Guides</p>
          </div>

          <div className="stat_box">
            <h3>50+</h3>
            <p>Destinations</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
