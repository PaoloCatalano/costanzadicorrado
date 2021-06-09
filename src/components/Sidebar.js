import React from "react"
import Links from "./Links"
import Socials from "./Socials"
import { StaticImage } from "gatsby-plugin-image"
import { useGlobalContext } from "../context/context"
import HamburgerBtn from "./HamburgerBtn"

const Sidebar = ({ handleClick }) => {
  const { showLinks } = useGlobalContext()

  return (
    <aside className={`sidebar ${showLinks ? "show-sidebar" : ""}`}>
      <HamburgerBtn />
      <div className="side-container">
        <a href="#home" onClick={handleClick}>
          <StaticImage
            href="#home"
            src="../assets/images/cdb.png"
            alt="Costanza Dicorrado Logo"
            placeholder="tracedSVG"
            layout="fixed"
            width={200}
            className="img"
            quality="100"
            style={{ margin: "0 auto" }}
          />
        </a>
        <Links
          styleClass={`${showLinks ? "links sidebar-links" : "links"}`}
          handleClick={handleClick}
        />
        <Socials styleClass={`${showLinks ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
