import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customisationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Get accurate and up-to-date weather information for your travel destinations, helping you plan your trips better.'
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Our experienced tour guides provide insightful and engaging tours, ensuring you have a memorable experience.'
    },
    {
        imgUrl: customisationImg,
        title: 'Customisation',
        desc: 'Tailor your travel experiences with our customization options, allowing you to create the perfect itinerary.'
    }
]


const ServiceList = () => {
    return (
        <div className="flex gap-6 w-3/4">
            {serviceData.map((item, index) => (
                <ServiceCard item={item} key={index} />
            ))}
        </div>
    )
}

export default ServiceList
