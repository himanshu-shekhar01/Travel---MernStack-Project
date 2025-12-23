import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import './tourCard.css'

const TourCard = ({ tour }) => {
    const {
        id,
        title,
        photo,
        price,
        featured,
        reviews,
        city
    } = tour;

    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating =
        totalRating === 0
            ? ""
            : totalRating === 1
                ? totalRating
                : totalRating / reviews?.length;

    return (
        <div className="tour_card">
            <Card>
                {/* Image Section */}
                <div className="tour_img">
                    <img src={photo} alt={title} />

                    {featured && <span className="featured_badge">Featured</span>}
                </div>

                {/* Card Body */}
                <CardBody>
                    {/* Top info */}
                    <div className="card_top">
                        <span className="tour_location">
                            <i class="ri-map-pin-line"></i> {city}
                        </span>

                        <span className="tour_rating">
                            <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? "Not rated" :
                                <span> ({reviews.length})</span>}
                        </span>
                    </div>

                    {/* Title */}
                    <h5 className="tour_title">
                        <Link to={`/tour/${id}`}>{title}</Link>
                    </h5>

                    {/* Bottom */}
                    <div className="card_bottom">
                        <h5>
                            ₹{price} <span>/ per person</span>
                        </h5>

                        <Link to={`/tours/${id}`} className="btn book_btn">
                            Book Now
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </div>
        
    )
}

export default TourCard
