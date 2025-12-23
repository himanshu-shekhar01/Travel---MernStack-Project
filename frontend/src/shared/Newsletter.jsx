import React from "react";
import "./Newsletter.css";
import newsletterImg from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        
        {/* Left content */}
        <div className="newsletter__content">
          <h2>Subscribe now to get useful traveling information.</h2>

          <div className="newsletter__input">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Subscribe</button>
          </div>

          <p>
            Get travel tips, destination guides, and exclusive offers straight
            to your inbox.
          </p>
        </div>

        {/* Right image */}
        <div className="newsletter__img">
          <img src={newsletterImg} alt="newsletter" />
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
