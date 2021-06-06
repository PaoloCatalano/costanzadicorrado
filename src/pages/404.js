import React from "react"
import { Link } from "gatsby"
import Logo from "../components/Logo"
const Error = () => {
  return (
    <main className="second-page">
      <Logo />
      <h1>404 Error</h1>
      <h3>La pagina che stai cercnando non esiste</h3>
      <Link to="/" className="btn">
        Torna a home
      </Link>
    </main>
  )
}

export default Error
