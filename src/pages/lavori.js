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
        {/* <div className="container"> */}
        <Title title="I miei Lavori" />
        <AllLavori projects={nodes} />
        <div className="container">
          <Link to="/" className="btn" style={{ padding: "1rem 1.5rem" }}>
            Torna alla home
          </Link>
        </div>
        {/* </div> */}
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
