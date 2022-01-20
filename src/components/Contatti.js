import React from "react"
import Form from "./Form"
import Title from "./Title"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import VisitCard from "./VisitCard"

const Contatti = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFotoContatti(sort: { fields: ordine, order: ASC }) {
        nodes {
          foto {
            gatsbyImageData(
              quality: 100
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
            id
          }
        }
      }
    }
  `)

  const {
    allContentfulFotoContatti: { nodes },
  } = data

  return (
    <div className="container" id="contatti">
      <Title title="contattami" />
      <section className="container-center">
        <Form />
        <VisitCard />
        <div className="contact-pics">
          {nodes.map(pic => {
            return (
              <div key={pic.foto.id} style={{ maxWidth: "475px" }}>
                <GatsbyImage
                  image={getImage(pic.foto)}
                  alt={`costanza dicorrado ${pic.foto.id}`}
                  className="contatti-pic img-tile"
                />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Contatti
