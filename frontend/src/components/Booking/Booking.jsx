import React, {useState} from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({tour, avgRating}) => {
    const {price, reviews} = tour;
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        userId: '01',
        userEmail: "example@gmail.com",
        fullName:'',
        guestSize:1,
        bookAt: ''
    })
    const handleChange = (e)=>{
        setCred((prev)=>({...prev, [e.target.id]: e.target.value})) ;

    }

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(cred.guestSize) + Number(serviceFee);
    const handleClick= (e)=>{
        e.preventDefault();
        navigate('/thank-you');
    }
  return (
    <div className='booking'>
        <div className='booking__top flex items-center'>
            <h3>${price} <span>/per person</span></h3>
            <span className="tour_rating">
                <i class="ri-star-fill"></i>
                {avgRating === 0 ? null : avgRating}({reviews.length})
              </span>
        </div>

        {/* Booking form */}
        <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking_info-form' onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='flex items-center gap-3'>
                    <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                    <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>
        {/* booking bottom */}
        <div className="booking-bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5>${price} <i class='ri-close-line'></i> 1 person</h5>
                    <span>${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Service Charge</h5>
                    <span>${serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>
            </ListGroup>

            <Button className='cursor-pointer btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
        </div>
    </div>

  )
}

export default Booking
