import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Title from "./Title"
const About = () => {
  // const {
  //   instaNode: {
  //     localFile: { childImageSharp },
  //     caption,
  //   },
  // } = useStaticQuery(graphql`
  //   {
  //     instaNode(id: { eq: "CLO-138lqBj" }) {
  //       localFile {
  //         childImageSharp {
  //           gatsbyImageData(
  //             layout: FIXED
  //             width: 350
  //             placeholder: TRACED_SVG
  //             height: 500
  //           )
  //         }
  //       }
  //       caption
  //     }
  //   }
  // `)
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
  `)
  return (
    <section className="container" id="about">
      <div className="container-center">
        <div>
          <GatsbyImage
            image={getImage(data.file.childImageSharp)}
            alt="costanza dicorrado"
            className="about-pic"
          />
          <div style={{ flexDirection: "column" }}>
            <Title title="about me" />
            <p>
              Sono giovane ma con le idee chiare e tanta voglia di fare! Infatti
              dopo la maturità classica al Convitto Cutelli di Catania, ho
              iniziato un periodo ricco di formazione ed esperienze che
              arricchiranno la mia passione. Amo l'arte in tutte le sue forme,
              sin da piccola ho alimentato questa vena attraverso lezioni di
              pianoforte, poi di disegno, tutte esperienze che hanno dato sfogo
              ai sentimenti che si tradurranno in una passione importante verso
              il mondo del make up in tutte le sue forme.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
