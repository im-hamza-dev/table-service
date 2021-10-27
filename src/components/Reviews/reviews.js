import React, { useState } from "react";
import "./reviews.scss";
import Carousel from "react-bootstrap/Carousel";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="reviews-parent">
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item>
          <div className="reviews-parent">
            <div className="reviews-heading">
              What some of our venues are saying
            </div>

            <div className="reviews-item">
              <div className="reviews-item-content">
                We love the app and so do the 1000’s of customers we have served
                using it since reopening our beer garden in April. It’s the
                future and we don’t want to go back to people queuing at the bar
                it’s that good. Do your self a favour and give it a try, you
                will sell more product as the customers don’t have to move or
                queue. It’s now an invaluable resource for my taproom business
              </div>
              <div className="reviews-item-name">Shane Swindells</div>
              <div className="reviews-item-role">Head Brewer & Owner</div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="reviews-parent">
            <div className="reviews-heading">Second title here</div>

            <div className="reviews-item">
              <div className="reviews-item-content">
                We love the app and so do the 1000’s of customers we have served
                using it since reopening our beer garden in April. It’s the
                future and we don’t want to go back to people queuing at the bar
                it’s that good. Do your self a favour and give it a try, you
                will sell more product as the customers don’t have to move or
                queue. It’s now an invaluable resource for my taproom business
              </div>
              <div className="reviews-item-name">Shane Swindells</div>
              <div className="reviews-item-role">Head Brewer & Owner</div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="reviews-parent">
            {" "}
            <div className="reviews-heading">Third title here</div>
            <div className="reviews-item">
              <div className="reviews-item-content">
                We love the app and so do the 1000’s of customers we have served
                using it since reopening our beer garden in April. It’s the
                future and we don’t want to go back to people queuing at the bar
                it’s that good. Do your self a favour and give it a try, you
                will sell more product as the customers don’t have to move or
                queue. It’s now an invaluable resource for my taproom business
              </div>
              <div className="reviews-item-name">Shane Swindells</div>
              <div className="reviews-item-role">Head Brewer & Owner</div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
