import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tours.css";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";

const Tours = () => {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  //fetch api data
  const { data: tours, loading, error } = useFetch(
    `${BASE_URL}/tours?page=${page}`
  );

  const { data: tourCount } = useFetch(
    `${BASE_URL}/tours/search/getTourCount`
  );

  useEffect(() => {
    if (tourCount) {
      const pages = Math.ceil(tourCount / 8);
      setPageCount(pages);
      window.scrollTo(0, 0);
    }
  }, [page, tourCount, tours]);

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

          {/* LOADING */}
          {loading && <h4 className="text-center">Loading...</h4>}

          {/* ERROR */}
          {error && <h4 className="text-center">{error}</h4>}

          {/* TOURS */}
          {!loading && !error && (
            <>
              <div className="tour__grid">
                {tours?.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>

              {/* PAGINATION */}
              <div className="pagination">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active_page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Tours;
