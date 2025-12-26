import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tourCard.css";

const TourCard = ({ tour }) => {
  const {
    _id,
    title,
    photo,
    price,
    featured,
    reviews = [],
    city
  } = tour;

  const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    reviews.length === 0 ? 0 : (totalRating / reviews.length).toFixed(1);

  return (
    <div className="tour_card">
      <Card>
        {/* Image */}
        <div className="tour_img">
          <img src={photo} alt={title} />
          {featured && <span className="featured_badge">Featured</span>}
        </div>

        <CardBody>
          {/* Top */}
          <div className="card_top">
            <span className="tour_location">
              <i className="ri-map-pin-line"></i> {city}
            </span>

            <span className="tour_rating">
              <i className="ri-star-fill"></i>{" "}
              {reviews.length === 0 ? "Not rated" : avgRating}
              {reviews.length > 0 && <span> ({reviews.length})</span>}
            </span>
          </div>

          {/* Title */}
          <h5 className="tour_title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>

          {/* Bottom */}
          <div className="card_bottom">
            <h5>
              ₹{price} <span>/ per person</span>
            </h5>

            <Link to={`/tours/${_id}`} className="btn book_btn">
              Book Now
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
