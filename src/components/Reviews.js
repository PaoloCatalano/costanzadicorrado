import React from "react"
import Slider from "../components/SliderReview"
import Title from "./Title"
// import Brand from "./Brand"
// import BrandSmall from "./BrandSmall"
import Collaborazioni from "./Collaborazioni"

const reviews = () => {
  return (
    <section className="container" id="recensioni">
      <div
        className="container-center"
        itemProp="review"
        itemScope
        itemType="https://schema.org/Review"
      >
        <Title title="cosa pensano di me" />
        <Slider />
        <div style={{ height: "1rem", marginBottom: "9rem" }}></div>
        <Title title="Collaborazioni" />
        {/* <div className="collab-4">
          <BrandSmall />
          <BrandSmall />
          <BrandSmall />
          <BrandSmall />
        </div>
        <div className="collab-1">
          <Brand />
        </div> */}
        <Collaborazioni />
      </div>
    </section>
  )
}

export default reviews
