import React from "react"
import Logo from "../components/Logo"
import { Link } from "gatsby"
import { AiFillHome } from "react-icons/ai"
import Socials from "./Socials"

export default function NavSpecial() {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 99 }}>
      <div className="nav-center">
        <Logo />

        <Socials styleClass="sameASlogo121px" />
        <Link to="/" className="icona-home-lavori">
          <AiFillHome className="icon white" />
        </Link>
      </div>
    </nav>
  )
}
