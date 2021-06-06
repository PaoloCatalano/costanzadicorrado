import React, { createContext, useContext, useState } from "react"
import { Cookies } from "react-cookie-consent"

const Context = createContext()

const Provider = ({ children }) => {
  const [showLinks, setShowLinks] = useState(false)
  const [cookieAccepted, setCookieAccepted] = useState(
    Cookies.get("promozione")
  )
  const openLinks = () => {
    setShowLinks(true)
  }
  const closeLinks = () => {
    setShowLinks(false)
  }
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <Context.Provider
      value={{
        showLinks,
        openLinks,
        closeLinks,
        toggleLinks,
        cookieAccepted,
        setCookieAccepted,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(Context)
}
// import { useGlobalContext } from '../context/context'
// const { {....} } = useGlobalContext()

export { Context, Provider }
