import React from "react"
import Logo from "./Logo"
import Links from "./Links"
import Socials from "./Socials"
import Sidebar from "./Sidebar"
import HamburgerBtn from "./HamburgerBtn"
import { useGlobalContext } from "../context/context"
const Navbar = () => {
  const { toggleLinks, closeLinks } = useGlobalContext()
  const navbar = React.useRef(null)

  const handleClick = e => {
    e.preventDefault()
    closeLinks()
    const target = e.target.getAttribute("href")
    const location = document.querySelector(target).offsetTop
    window.scrollTo({
      left: 0,
      top: location - navbar.current.clientHeight + 30,
    })
  }
  return (
    <>
      <Sidebar handleClick={handleClick} />
      <nav className="navbar sticky" ref={navbar}>
        <div className="nav-center">
          <Logo />
          <Links handleClick={handleClick} />
          <Socials styleClass="sameASlogo121px" />
          <HamburgerBtn toggleLinks={toggleLinks} />
        </div>
      </nav>
    </>
  )
}

export default Navbar
