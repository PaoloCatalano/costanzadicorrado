import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import InstagramTemplate from "./Instagram-template"

const Instagram = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulInstagram(sort: { fields: ordine, order: ASC }) {
        nodes {
          permalink
          caption {
            caption
          }
          image {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              quality: 100
              layout: CONSTRAINED
              aspectRatio: 0.8
            )
          }
        }
      }
    }
  `)

  const instaAccount = {
    nome: "costanzadicorrado_mua",
    location: "Catania, Italia",
    link: "https://www.instagram.com/costanzadicorrado_mua/",
  }

  return (
    <div className="contenitore-insta" style={{ marginTop: "5rem" }}>
      <h4
        style={{
          textTransform: "uppercase",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        guarda i miei ultimi lavori su{" "}
        <a
          className="link-style"
          href={instaAccount.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </h4>
      <div className="instagram">
        {data.allContentfulInstagram.nodes.map(post => {
          const {
            caption: { caption },
            permalink,
            image,
          } = post

          return (
            <InstagramTemplate
              account={instaAccount.nome}
              location={instaAccount.location}
              link={instaAccount.link}
              permalink={permalink}
              image={image}
              caption={caption}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Instagram
