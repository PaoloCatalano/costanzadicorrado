import React from "react"
import Title from "../components/Title"
import Highlights from "../components/Highlights"
import Instagram from "../components/Instagram"

const Lavori = () => {
  return (
    <section className="container" id="lavori">
      <div className="container-center">
        <Title title="I miei lavori" />
        <Highlights />

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
              href="https://www.instagram.com/costanzadicorrado_mua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </h4>
          <Instagram />
        </div>
      </div>
    </section>
  )
}

export default Lavori
