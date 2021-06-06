import React from "react"
import { useGlobalContext } from "../context/context"

const HamburgerBtn = () => {
  const { toggleLinks, showLinks } = useGlobalContext()
  return (
    <button
      aria-label="menu button"
      style={{
        background: "transparent",
        boxShadow: "none",
        zIndex: 9999,
        position: "absolute",
        right: 0,
      }}
      id="nav-icon4"
      className={showLinks ? "open" : ""}
      onClick={toggleLinks}
    >
      <span aria-label="menu button 1"></span>
      <span aria-label="menu button 2"></span>
      <span aria-label="menu button 3"></span>
    </button>
  )
}

export default HamburgerBtn
