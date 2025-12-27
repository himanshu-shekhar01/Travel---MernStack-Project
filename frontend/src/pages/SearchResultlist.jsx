import React from "react";
import '../styles/search-result.css';
import CommonSection from "../shared/CommonSection";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";

const SearchResultlist = () => {
  const location = useLocation();
  const data = location.state || [];
  console.log(data)

  return (
    <>
      <CommonSection title="Tour Search Result" />

      <section className="full gap-10">
        {data.length === 0 ? (
          <div className="no_result">
            <h4>No tours found</h4>
          </div>
        ) : (
          data.map((tour) => (
            <TourCard tour={tour} key={tour._id} />
          ))
        )}
      </section>

      <Newsletter />
    </>
  );
};

export default SearchResultlist;
