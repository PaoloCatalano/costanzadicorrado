import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
const Logo = () => {
  const location = useLocation()

  const handleClick = e => {
    e.preventDefault()

    if (location.pathname === "/") {
      window.scrollTo({
        left: 0,
        top: 0,
      })
    } else {
      navigate("/")
    }
  }
  return (
    <a href="#home" onClick={handleClick}>
      <StaticImage
        src="../assets/images/cdb.png"
        alt="Costanza Dicorrado Logo"
        placeholder="tracedSVG"
        layout="fixed"
        height={60}
        className="img logo"
        quality="100"
      />
    </a>
  )
}

export default Logo
