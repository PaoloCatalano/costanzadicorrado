import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import reviews from "../assets/constant/reviews"

const SliderReview = () => {
  return (
    <Carousel
      centerMode
      centerSlidePercentage={100}
      emulateTouch
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      swipeScrollTolerance={100}
      width="100%"
      interval={6000}
    >
      {reviews.map(review => {
        const { id, icon, name, text } = review
        return (
          <div key={id} className="review" itemProp="itemReviewed">
            <img
              className="user"
              src={icon}
              width="50px"
              height="50px"
              alt={name}
            />
            <h4 itemProp="author">{name}</h4>
            <p className="testo" itemProp="reviewBody">
              {text}
            </p>
          </div>
        )
      })}
    </Carousel>
  )
}

export default SliderReview
