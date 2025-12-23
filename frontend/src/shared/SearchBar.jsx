import React, { useRef } from 'react'
import './searchbar.css'
import { Col, Form, FormGroup} from 'reactstrap'
const SearchBar = () => {
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupRef = useRef(0)

    const secondHandler = () =>{
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroup = maxGroupRef.current.value;

        if(location === '' || distance === '' || maxGroup === ''){
            return alert ('All fields are required!')
        }

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
                <i ref={distanceRef} class="ri-map-pin-time-line"></i>
                </span>
                <div>
                    <h6>Distance</h6>
                    <input className='input' type="number" placeholder='Distance k/m' />
                </div>
            </FormGroup>
            <FormGroup className='flex gap-2 form_group'>
                <span>
                <i ref={maxGroupRef} class="ri-group-line"></i>
                </span>
                <div>
                    <h6>Max People</h6>
                   <input className='input' type="number" placeholder='0' />
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
