import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import './featureList.css'

const FeatureList = () => {
  return (
    <div className="feature_grid">
      {tourData.map(tour => (
        <TourCard tour={tour} key={tour.id} />
      ))}
    </div>
  )
}

export default FeatureList
