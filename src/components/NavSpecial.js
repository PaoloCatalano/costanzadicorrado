import React from "react"
import Logo from "../components/Logo"
import { Link } from "gatsby"
import { AiFillHome } from "react-icons/ai"
export default function NavSpecial() {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 99 }}>
      <div className="nav-center">
        <Logo />
        <Link
          to="/"
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <AiFillHome className="icon white" />
        </Link>
      </div>
    </nav>
  )
}
