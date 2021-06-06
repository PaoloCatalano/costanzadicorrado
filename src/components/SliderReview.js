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
      // transitionTime={3000}
      // stopOnHover
    >
      {reviews.map(review => {
        const { id, icon, name, text } = review
        return (
          <div key={id} className="review">
            <img className="user" src={icon} alt={name} />
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
