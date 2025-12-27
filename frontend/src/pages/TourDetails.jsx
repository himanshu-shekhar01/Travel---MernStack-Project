import React, { useRef, useState } from 'react'
import '../styles/tourDetails.css'
import tourData from '../assets/data/tours'
import { Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef(null);
  const [tourRating, setTourRating] = useState(null);

  //this is static file fetching later fetch
  const tour = tourData.find(tour => tour.id === id);
  //destructure tour object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;
  //calculate avg rating
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = e =>{
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`
      Rating: ${tourRating},
      Review: ${reviewText}
    `)
  }

  return (
    <>
      <section className='full'>
        <div className="tour_content">
          <img src={photo} alt="" />
          <div className='tour-info'>
            <h2>{title}</h2>
            <div className="flex items-center gap-5">
              <span className="tour_rating">
                <i class="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i> {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? "Not rated" :
                  <span> ({reviews.length})</span>}
              </span>
              <span>
                <i class='ri-map-pin-fill'></i>{address}
              </span>
            </div>
            <div className="tour_extraDetails">
              <span>
                <i class='ri-map-pin-2-line'></i>
                {city}
              </span>
              <span>
                <i class='ri-money-dollar-circle-line'></i>
                ${price} /per person
              </span>
              <span><i class="ri-map-pin-time-line"></i>{distance} k/m</span>
              <span><i class='ri-group-line'></i> {maxGroupSize}</span>
            </div>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
          {/* tour review section */}
          <div className='tour_review'>
            <h4>Reviews({reviews.length} reviews)</h4>
            <Form onSubmit={submitHandler}>
              <div className='flex items-center gap-3 mb-4 rating_group'>
                <span onClick={()=> setTourRating(1)}>
                  1 <i class="ri-star-fill"></i>
                </span>
                <span onClick={()=> setTourRating(2)}>
                  2 <i class="ri-star-fill"></i>
                </span>
                <span onClick={()=> setTourRating(3)}>
                  3 <i class="ri-star-fill"></i>
                </span>
                <span onClick={()=> setTourRating(4)}>
                  4 <i class="ri-star-fill"></i>
                </span>
                <span onClick={()=> setTourRating(5)}>
                  5 <i class="ri-star-fill"></i>
                </span>
              </div>
              <div className='review_input'>
                <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required />
                <button className='btn primary__btn text-white' type='submit'>
                  Submit
                </button>
              </div>
            </Form>

            <ListGroup className="user_reviews">
              {reviews.map((review, index) => (
                <div className="review_item" key={index}>
                  <img src={avatar} alt="user" />

                  <div className='w-100'>
                    <div className="flex items-center justify-between w-[50rem]">
                      <div>
                        <h5>Himanshu Shekhar</h5>
                        <p>{new Date('01-11-2024').toLocaleDateString("en-US", options)}</p>
                      </div>
                      <span className='flex items-center'>
                        {review.rating} <i class="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i>        
                      </span>
                    </div>

                    <h6>Amazing tour</h6>
                  </div>
                </div>
              ))}
            </ListGroup>

          </div>
        </div>
        <div>
          <Booking tour={tour} avgRating={avgRating}/>
        </div>
      </section>
    </>
  )
}

export default TourDetails
