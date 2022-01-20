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
        <Instagram />
      </div>
    </section>
  )
}

export default Lavori
