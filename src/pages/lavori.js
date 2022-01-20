import React from "react"
import { Link } from "gatsby"
import NavSpecial from "../components/NavSpecial"
import Footer from "../components/Footer"
import Title from "../components/Title"
import AllLavori from "../components/AllLavori"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const Lavori = ({ data }) => {
  const {
    allContentfulFotoLavori: { nodes },
  } = data
  return (
    <>
      <NavSpecial />
      <Seo title="I Lavori di Costanza Dicorrado" />
      <main className="second-page">
        <Title title="I miei Lavori" />
        <AllLavori projects={nodes} />
        <div className="container">
          <Link to="/" className="btn big-margin">
            Torna alla home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
export const query = graphql`
  {
    allContentfulFotoLavori(sort: { fields: ordine, order: ASC }) {
      nodes {
        categoria
        ordine
        titolo
        foto {
          gatsbyImageData(
            layout: CONSTRAINED
            quality: 100
            placeholder: BLURRED
            width: 500
          )
        }
      }
    }
  }
`

export default Lavori
