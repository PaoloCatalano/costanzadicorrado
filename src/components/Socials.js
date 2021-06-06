import React from "react"
import { socials } from "../assets/constant/socials"

const Socials = ({ styleClass }) => {
  return (
    <div className={`social-icons links-container ${styleClass}`}>
      {socials.map(link => {
        return (
          <a href={link.url} key={link.id} aria-label={link.url}>
            {link.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Socials
