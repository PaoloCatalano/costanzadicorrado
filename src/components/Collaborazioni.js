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
      <div className="classs">
        <div className="contenitore-brand">
          {brand.map((b, i) => (
            <div key={i} style={{ margin: "0 1rem" }}>
              <GatsbyImage
                image={getImage(b.logo)}
                className="brand-img"
                alt={b.titolo + " " + b.ordine}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
