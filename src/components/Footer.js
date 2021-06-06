import React from "react"
import Socials from "./Socials"

const Footer = () => {
  return (
    <footer>
      <p>
        Costanza Dicorrado&copy; {new Date().getFullYear()} All rights reserved.
      </p>

      <Socials styleClass="social-footer" />
    </footer>
  )
}

export default Footer
