import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
export default function Collaborazioni() {
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
              height: 320
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
      <div className="overflow-scroll">
        <div className="overlay-collaborazioni"></div>
        <div className="contenitore-brand">
          {brand.map(b => (
            <div key={b.titolo + b.ordine} style={{ margin: "0 1rem" }}>
              <GatsbyImage
                image={getImage(b.logo)}
                className="brand-img"
                alt={b.titolo + " collabora con Costanza Dicorrado. "}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
