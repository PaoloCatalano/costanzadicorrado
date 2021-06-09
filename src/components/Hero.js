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
          <div className="hero-title">Costanza Dicorrado</div>
          <div style={{ margin: "1rem 0 3rem 0 " }}>Make Up Artist </div>
          <a className="btn" href="#contatti" onClick={handleClick}>
            Contattami
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
