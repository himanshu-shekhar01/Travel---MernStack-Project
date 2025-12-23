import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import "./testimonials.css";

const Testimonials = () => {
  const settings = { 
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section py-16">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          
          {/* Card 1 */}
          <div className="px-3">
            <div className="testimonial-card">
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur sint, iusto est aperiam.
              </p>

              <div className="testimonial-user">
                <img src={ava01} alt="user" />
                <div>
                  <h6>Nitin Verma</h6>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="px-3">
            <div className="testimonial-card">
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur sint, iusto est aperiam.
              </p>

              <div className="testimonial-user">
                <img src={ava02} alt="user" />
                <div>
                  <h6>Nitin Verma</h6>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="px-3">
            <div className="testimonial-card">
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur sint, iusto est aperiam.
              </p>

              <div className="testimonial-user">
                <img src={ava03} alt="user" />
                <div>
                  <h6>Nitin Verma</h6>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
