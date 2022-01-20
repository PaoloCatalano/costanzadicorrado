import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SliderHero = () => {
  const {
    allContentfulFotoHome: { nodes: pics },
  } = useStaticQuery(graphql`
    {
      allContentfulFotoHome(sort: { fields: ordine, order: ASC }) {
        nodes {
          ordine
          titolo
          image: foto {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 100
            )
          }
        }
      }
    }
  `)

  return (
    <Carousel
      emulateTouch
      swipeScrollTolerance={100}
      centerMode
      centerSlidePercentage={100}
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={6000}
    >
      {pics.map((pic, index) => {
        const { image, ordine, titolo } = pic
        return (
          <div key={ordine}>
            <GatsbyImage
              image={getImage(image)}
              className="recipe-img "
              style={{ height: "calc(100vh - 92px)" }}
              alt={titolo + " " + index}
            />
            <p
              className="legend"
              style={{
                background: "rgba(116, 116, 116, 0.514)",
                width: "100vw",
                height: "100%",
                minWidth: "100vw",
                maxWidth: "100vw",
                padding: 0,
                margin: 0,
                top: 0,
                left: 0,
                borderRadius: 0,
              }}
            ></p>
          </div>
        )
      })}
    </Carousel>
  )
}

export default SliderHero
