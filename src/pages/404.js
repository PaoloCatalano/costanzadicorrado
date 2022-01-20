import React from "react"
import { Link } from "gatsby"
import NavSpecial from "../components/NavSpecial"
import Footer from "../components/Footer"
import Title from "../components/Title"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo />
      <NavSpecial />
      <main
        className="second-page"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <Title title="Pagina non trovata" />
        <section style={{ height: "20vh" }}>
          <h3>Questa pagina non esiste...</h3>
        </section>
        <div className="big-margin">
          <Link to="/" className="btn big-margin">
            Torna a home
          </Link>
        </div>
      </main>
      <footer style={{ width: "100vw", bottom: 0, position: "absolute" }}>
        <Footer />
      </footer>
    </>
  )
}

export default Error
