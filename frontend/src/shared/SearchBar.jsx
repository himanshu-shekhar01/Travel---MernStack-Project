import React, { useRef } from 'react'
import './searchbar.css'
import { Col, Form, FormGroup} from 'reactstrap'
import {BASE_URL} from './../utils/config'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate()

    const secondHandler = async() =>{
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if(location === '' || distance === '' || maxGroupSize === ''){
            return alert ('All fields are required!')
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
        if(!res.ok){
            alert('Something went wrong')
        }
        const result = await res.json()
        navigate(`/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {state: result.data})

    }

  return <Col lg='12'>
    <div className="searchbar">
        <Form className='flex'>
            <FormGroup className='flex gap-2 form_group form_group_fast'>
                <span>
                <i class="ri-map-pin-line"></i>
                </span>
                <div>
                    <h6>Location</h6>
                    <input ref={locationRef} className='input' type="text" placeholder='where are you going?' />
                </div>
            </FormGroup>
            <FormGroup className='flex gap-2 form_group form_group_fast'>
                <span>
                <i class="ri-map-pin-time-line"></i>
                </span>
                <div>
                    <h6>Distance</h6>
                    <input ref={distanceRef} className='input' type="number" placeholder='Distance k/m' />
                </div>
            </FormGroup>
            <FormGroup className='flex gap-2 form_group'>
                <span>
                <i class="ri-group-line"></i>
                </span>
                <div>
                    <h6>Max People</h6>
                   <input ref={maxGroupSizeRef} className='input' type="number" placeholder='0' />
                </div>
            </FormGroup>
            <span className='search_icon' type='submit' onClick={secondHandler}>
                <i class="ri-search-2-line"></i>
            </span>
        </Form>
    </div>
  </Col>
}

export default SearchBar
