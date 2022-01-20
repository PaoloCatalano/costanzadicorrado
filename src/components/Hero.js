import React from "react"
import SliderHero from "./SliderHero"
const Hero = () => {
  const handleClick = e => {
    e.preventDefault()

    const target = e.target.getAttribute("href")
    const location = document.querySelector(target).offsetTop
    window.scrollTo({
      left: 0,
      top: location - 92 + 30,
    })
  }
  return (
    <section className="container" id="home">
      <div className="container-center" style={{ position: "relative" }}>
        <SliderHero />
        <div className="overlay">
          <div className="hero-title">Make Up Artist </div>
          <div className="link-style hero-name">Costanza Dicorrado</div>
          <a
            className="btn"
            style={{ padding: "1rem 1.5rem", textTransform: "uppercase" }}
            href="#contatti"
            onClick={handleClick}
          >
            Contattami
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
