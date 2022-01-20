import React from "react"
import { links } from "../assets/constant/links"

const Links = ({ handleClick, styleClass }) => {
  const linksContainer = React.useRef(null)
  const checkWindow = React.useCallback(() => {
    if (typeof window !== "undefined") {
      return window.pageYOffset
    }
  }, [])

  React.useEffect(() => {
    const list = Array.from(linksContainer.current.children)
    const navHeight = linksContainer?.current.parentElement.clientHeight

    const event = () => {
      list.forEach(link => {
        let location = 0
        let sectionHeight = 0

        if (document.querySelector(link.hash)?.offsetTop) {
          location = document.querySelector(link.hash).offsetTop
        }
        if (document.querySelector(link.hash)?.clientHeight) {
          sectionHeight = document.querySelector(link.hash).clientHeight
        }
        if (
          window.pageYOffset >= location - navHeight - 10 &&
          window.pageYOffset < location + sectionHeight - navHeight
        ) {
          link.classList.add("active")
        } else {
          link.classList.remove("active")
        }
      })
    }

    window.addEventListener("scroll", event)
    return () => {
      window.removeEventListener("scroll", event)
    }

    // eslint-disable-next-line
  }, [checkWindow])

  return (
    <div className={`links links-container ${styleClass}`} ref={linksContainer}>
      {links.map(link => {
        return (
          <a href={link.url} key={link.id} onClick={handleClick}>
            {link.text}
          </a>
        )
      })}
    </div>
  )
}

export default Links
