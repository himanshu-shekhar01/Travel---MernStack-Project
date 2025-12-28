import React, { useContext, useState } from "react";
import "./booking.css";
import {
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour , avgRating }) => {
  // ✅ SAFE DESTRUCTURING
  const {price=0,reviews=[],title} = tour;

  const navigate = useNavigate();
  const {user} = useContext(AuthContext)

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + serviceFee;

  const handleClick = async(e) => {
    e.preventDefault();
    console.log(booking);
    try {
      if(!user || user===undefined || user===null){
        return alert('Please sign in')
      }

      const res = await fetch(`${BASE_URL}/bookings`,{
        method: 'post',
        headers:{
          'content-type':'application/json'
        },
        credentials: 'include',
        body:JSON.stringify(booking)
      })

      const result = await res.json();
      if(!res.ok){
        return alert(result.messaage);
      }
      navigate("/thank-you");
      
    } catch (err) {
      alert(err.messaage)
    }
    
  };

  return (
    <div className="booking">
      {/* TOP */}
      <div className="booking__top flex items-center justify-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>

        <span className="tour_rating">
          <i className="ri-star-fill"></i>
          {avgRating || "Not rated"} ({reviews.length})
        </span>
      </div>

      {/* FORM */}
      <div className="booking__form">
        <h5>Information</h5>

        <Form className="booking_info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup className="flex items-center gap-3">
            <input
              type="date"
              id="bookAt"
              required
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Guests"
              id="guestSize"
              min="1"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/* BOTTOM */}
      <div className="booking-bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0 d-flex justify-content-between">
            <h5>
              ${price} × {booking.guestSize} person
            </h5>
            <span>${price * booking.guestSize}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 d-flex justify-content-between">
            <h5>Service Charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>

          <ListGroupItem className="border-0 px-0 d-flex justify-content-between fw-bold">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button
          className="btn primary__btn w-100 mt-4 cursor-pointer"
          onClick={handleClick}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
