import React from "react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"

export const socials = [
  {
    id: 1,
    icon: (
      <FaFacebookSquare
        aria-label="www.facebook.com/costanzadicorradomua"
        className="icon social-icon"
      ></FaFacebookSquare>
    ),
    url: "https://www.facebook.com/costanzadicorradomua",
  },
  {
    id: 2,
    icon: (
      <FaInstagram
        aria-label="instagram.com/costanzadicorrado_mua"
        className="icon social-icon"
      ></FaInstagram>
    ),
    url: "https://instagram.com/costanzadicorrado_mua?igshid=ytjhfbagpnr0",
  },
  {
    id: 3,
    icon: (
      <IoIosMail
        aria-label="costanzadic@gmail.com"
        className="social-icon email"
      ></IoIosMail>
    ),
    url: "mailto:costanzadic@gmail.com",
  },
]
