import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/tourDetails.css";
import { Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import {AuthContext} from '../context/AuthContext'

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef(null);        
  const [tourRating, setTourRating] = useState(null);
  const {user} = useContext(AuthContext);

  const { data: tour, loading, error } = useFetch(
    `${BASE_URL}/tours/${id}`               
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);
                                             
  // 🔴 Handle loading
  if (loading) return <h3 className="text-center">Loading...</h3>;

  // 🔴 Handle error
  if (error) return <h3 className="text-center">Failed to load tour</h3>;

  // 🔴 Safety check
  if (!tour) return null;

  // ✅ Safe destructuring with defaults

  const {
    photo,
    title,
    desc,
    price,
    address,
    city,
    distance,
    maxGroupSize,
    reviews = [], // ⭐ VERY IMPORTANT
  } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async(e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try{
      if(!user || user===undefined || user === null){
        alert('Please sign in');
      }
      const reviewObject = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }

      const res = await fetch(`${BASE_URL}/reviews/${id}`,{
        method: 'post',
        headers:{
          'content-type':'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObject)
      });


      const result = await res.json();
      if(!res.ok){
        return alert(result.message);
      }
      alert(result.message);
    }catch(err){
      alert(err.message);

    }
  };

  return (
    <section className="full">
      <div className="tour_content">
        <img src={photo} alt={title} />

        <div className="tour-info">
          <h2>{title}</h2>

          <div className="flex items-center gap-5">
            <span className="tour_rating">
              <i className="ri-star-fill"></i>
              {avgRating || "Not rated"} ({reviews.length})
            </span>

            <span>
              <i className="ri-map-pin-fill"></i> {address}
            </span>
          </div>

          <div className="tour_extraDetails">
            <span><i className="ri-map-pin-2-line"></i> {city}</span>
            <span><i className="ri-money-dollar-circle-line"></i> ${price}/person</span>
            <span><i className="ri-map-pin-time-line"></i> {distance} km</span>
            <span><i className="ri-group-line"></i> {maxGroupSize}</span>
          </div>

          <h5>Description</h5>
          <p>{desc}</p>
        </div>

        {/* REVIEWS */}
        <div className="tour_review">
          <h4>Reviews ({reviews.length})</h4>

          <Form onSubmit={submitHandler}>
            <div className="rating_group flex gap-3 mb-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <span className="text-orange-300" key={num} onClick={() => setTourRating(num)}>
                  {num} <i className="ri-star-fill"></i>
                </span>
              ))}
            </div>

            <div className="review_input">
              <input
                type="text"
                ref={reviewMsgRef}
                placeholder="Share your thoughts"
                required
              />
              <button className="btn primary__btn cursor-pointer text-white" type="submit">
                Submit
              </button>
            </div>
          </Form>

          <ListGroup className="user_reviews">
            {reviews.map((review, index) => (
              <div className="review_item" key={index}>
                <img src={avatar} alt="user" />

                <div className="w-100">
                  <div className="flex justify-between">
                    <div>
                      <h5>{review.username || "Anonymous"}</h5>
                      <p>
                        {new Date(review.createdAt || Date.now())
                          .toLocaleDateString("en-US", options)}
                      </p>
                    </div>
                    <span>
                      {review.rating} <i className="ri-star-fill"></i>
                    </span>
                  </div>

                  <h6>{review.reviewText}</h6>
                </div>
              </div>
            ))}
          </ListGroup>
        </div>
      </div>

      {/* ✅ Booking safe now */}
      <Booking tour={tour} avgRating={avgRating} />
    </section>
  );
};

export default TourDetails;