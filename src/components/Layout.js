import React from "react"
import Navbar from "./Navbar"
import Promotion from "./Promotion"
import Footer from "./Footer"
import Seo from "./Seo"
const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Navbar />
      <Promotion />
      {children}
      <Footer />
    </>
  )
}

export default Layout
