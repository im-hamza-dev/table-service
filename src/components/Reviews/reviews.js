import React, { useState } from "react";
import "./reviews.scss";
import Carousel from "react-bootstrap/Carousel";

const Reviews = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="reviews-parent">
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        {props.reviews?.map((item, index) => (
          <Carousel.Item>
            <div className="reviews-parent">
              <div className="reviews-heading">{item?.review?.title}</div>

              <div className="reviews-item">
                <div className="reviews-item-content">
                  {item?.review?.description}
                </div>
                <div className="reviews-item-name"> {item?.review?.name}</div>
                <div className="reviews-item-role"> {item?.review?.role}</div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
