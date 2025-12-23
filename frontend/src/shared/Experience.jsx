import React from 'react'
import '../styles/experience.css'
import experienceImg from '../assets/images/experience.png' // use your image

const Experience = () => {
  return (
    <section className="experience_section">
      <div className="experience_container">

        {/* LEFT CONTENT */}
        <div className="experience_left">
          <h2>
            With our all experience <br />
            we will serve you
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quas aliquam, hic tempora inventore suscipit unde.
          </p>

          {/* STATS */}
          <div className="experience_stats">
            <div className="stat_box">
              <h3>12k+</h3>
              <p>Successful trip</p>
            </div>

            <div className="stat_box">
              <h3>2k+</h3>
              <p>Regular clients</p>
            </div>

            <div className="stat_box">
              <h3>10+</h3>
              <p>Years experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="experience_right">
          <div className="image_circle">
            <img src={experienceImg} alt="experience" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
