import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
// import { brand } from "../assets/data/brand"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const SliderBrands = () => {
  const {
    allContentfulBrand: { brand },
  } = useStaticQuery(graphql`
    {
      allContentfulBrand(sort: { fields: ordine, order: ASC }) {
        brand: nodes {
          ordine
          titolo
          logo {
            gatsbyImageData(
              layout: CONSTRAINED

              height: 400
              placeholder: TRACED_SVG
              quality: 100
            )
          }
        }
      }
    }
  `)
  return (
    <>
      <Carousel
        centerMode
        centerSlidePercentage={100}
        // emulateTouch
        // swipeScrollTolerance={100}
        swipeable={false}
        infiniteLoop
        autoPlay
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        width="100%"
        interval={3000}
        transitionTime={3000}
        stopOnHover={false}
      >
        {brand.map(bra => {
          const { ordine, logo, titolo } = bra
          return (
            <div key={ordine} style={{ zIndex: 9999 }}>
              {/* <img src={logo} alt={titolo} /> */}
              <GatsbyImage
                image={getImage(logo)}
                className="recipe-img "
                alt={titolo + " " + ordine}
              />
            </div>
          )
        })}
      </Carousel>
    </>
  )
}

export default SliderBrands
