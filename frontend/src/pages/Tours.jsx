import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tours.css'
import toursdata from '../assets/data/tours'
import SearchBar from '../shared/SearchBar'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'

const Tours = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5 / 4)
    setPageCount(pages)
  }, [page])

  return (
    <>
      <CommonSection title="All Tours" />

      <section className="full">
        <div className="container__custom">
          <SearchBar />
        </div>
      </section>

      <section className="tourcss">
        <div className="container__custom">
          
          {/* TOUR GRID */}
          <div className="tour__grid">
            {toursdata.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="pagination">
            {[...Array(pageCount).keys()].map(number => (
              <span
                key={number}
                onClick={() => setPage(number)}
                className={page === number ? 'active_page' : ''}
              >
                {number + 1}
              </span>
            ))}
          </div>

        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default Tours
