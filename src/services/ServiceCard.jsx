import React from 'react'
import './serviceCard.css'

const ServiceCard = ({ item }) => {
    const { imgUrl, title, desc } = item

    return (
        <div className="service_item">
            <div className="service_img">
                <img src={imgUrl} alt={title} />
            </div>
            <h5 className="font-bold">{title}</h5>
            <p>{desc}</p>
        </div>
    )
}


export default ServiceCard
