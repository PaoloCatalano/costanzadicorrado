import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
// import { fotoLavori } from "../assets/data/fotoLavori"

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
        {/* {pics.map((pic, index) => {
          return (
            <GatsbyImage
              key={index}
              image={getImage(pic.childImageSharp)}
              style={{ height: "100%" }}
              alt={pic.sourceInstanceName + " " + index}
            />
          )
        })} */}
        {fotoLavori.map(({ ordine, titolo, foto }, index) => (
          <div key={ordine} className={`div-tile div-${index}`}>
            {/* <img src={foto} alt={titolo} className="img-tile" /> */}
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
