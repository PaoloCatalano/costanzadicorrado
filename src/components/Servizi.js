import React from "react"
import Services from "../assets/constant/services"
import Title from "./Title"

const Servizi = () => {
  return (
    <section className="container" id="servizi">
      <Title title="servizi" />
      <div
        className="container-center servizi"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <meta itemProp="serviceType" content="Make Up Artist" />

        <Services />
      </div>
    </section>
  )
}

export default Servizi
