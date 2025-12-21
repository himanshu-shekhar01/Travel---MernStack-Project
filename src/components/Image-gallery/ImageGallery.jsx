import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./Gallery"; // adjust path if needed
import "./imageGallery.css";

const ImageGallery = () => {
  return (
    <div className="image_gallery">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4}}
      >
        <Masonry gutter="15px">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery_item">
              <img src={image} alt={`gallery-${index}`} />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImageGallery;
