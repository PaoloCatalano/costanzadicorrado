import React from "react"
import Layout from "../components/Layout"
import Servizi from "../components/Servizi"
import About from "../components/About"
import Hero from "../components/Hero"
import Lavori from "../components/Lavori"
import Reviews from "../components/Reviews"
import Contatti from "../components/Contatti"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Servizi />
      <Lavori />
      <Reviews />
      <Contatti />
    </Layout>
  )
}
