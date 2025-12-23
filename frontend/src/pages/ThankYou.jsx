import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/thankyou.css'

const ThankYou = () => {
  return (
    <section className="thankyou">
      <div className="thankyou__container">
        <span className="thankyou__icon">
          <i className="ri-checkbox-circle-line"></i>
        </span>

        <h1>Thank You!</h1>
        <h3>Your tour has been booked successfully 🎉</h3>

        <p>
          We have received your booking details.
          <br />
          Our team will contact you shortly.
        </p>

        <Link to="/home" className="btn primary__btn">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default ThankYou
