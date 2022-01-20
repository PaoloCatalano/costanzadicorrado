import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Highlights = () => {
  const {
    allContentfulFotoLavori: { nodes: fotoLavori },
  } = useStaticQuery(graphql`
    {
      allContentfulFotoLavori(
        sort: { fields: ordine, order: ASC }
        filter: { homepage: { eq: true } }
      ) {
        nodes {
          titolo
          ordine
          foto {
            gatsbyImageData(
              layout: CONSTRAINED
              quality: 100
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="highlights">
        {fotoLavori.map(({ ordine, titolo, foto }, index) => (
          <div key={ordine} className={`div-tile div-${index}`}>
            <GatsbyImage
              image={getImage(foto.gatsbyImageData)}
              style={{ height: "100%" }}
              alt={titolo + " " + ordine}
              className="img-tile"
            />
          </div>
        ))}
      </div>
      <div
        style={{ display: "flex", padding: "4rem", justifyContent: "center" }}
      >
        <Link to="/lavori" className="btn">
          Tutti i miei lavori
        </Link>
      </div>
    </>
  )
}

export default Highlights
