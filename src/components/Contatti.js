import React from "react"
import Form from "./Form"
import { IoIosMail } from "react-icons/io"
import { ImLocation } from "react-icons/im"
import Title from "./Title"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
        <article className="contacts">
          <div className="flex-col media-flex-col">
            <div className="flex-row correction-translateX">
              <span>
                <ImLocation className="icon" />
              </span>
              Catania, Sicilia
            </div>
            <div className="flex-row correctot-mail-icon">
              <span>
                <IoIosMail className="icon" />
              </span>
              <a href="mailto:costanzadic@gmail.com">costanzadic@gmail.com</a>
            </div>
          </div>
        </article>
        <div
          style={{
            margin: "2rem auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {nodes.map(pic => {
            return (
              <div key={pic.foto.id} style={{ maxWidth: "475px" }}>
                <GatsbyImage
                  image={getImage(pic.foto)}
                  alt={`costanza dicorrado ${pic.foto.id}`}
                  className="contatti-pic"
                  style={{ borderRadius: "1rem" }}
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
