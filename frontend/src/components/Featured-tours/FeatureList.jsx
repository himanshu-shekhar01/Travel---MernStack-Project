import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import './featureList.css'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const FeatureList = () => {
  const {data: featuredTours, loading, error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  return (
    <>
    {
      loading && <h4>Loading.........</h4>
    }
    {
      error && <h4>{error}</h4>
    }
    <div className="feature_grid">
      {!loading && !error && tourData.map(tour => (
        <TourCard tour={tour} key={tour.id} />
      ))}
    </div>
    </>
  )
}

export default FeatureList
