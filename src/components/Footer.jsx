import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container">

        {/* Brand */}
        <div className="footer_box">
          <h2 className="footer_logo">
            Travel<span>Xpress</span>
          </h2>
          <p>
            Discover amazing places, book unforgettable tours,
            and travel with comfort and confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer_box">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer_box">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer_box">
          <h4>Contact</h4>
          <p>Email: support@travelxpress.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="footer_social">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-linkedin-fill"></i>
          </div>
        </div>

      </div>

      <div className="footer_bottom">
        <p>© {year} TravelXpress. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
