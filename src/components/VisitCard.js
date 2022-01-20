import React from "react"
import { IoIosMail } from "react-icons/io"
import { ImLocation } from "react-icons/im"

export default function VisitCard() {
  return (
    <article className="contacts">
      <div className="flex-col media-flex-col">
        <div className="flex-row correction-translateX">
          <span>
            <ImLocation className="icon" />
          </span>
          Disponibile a trasferte
        </div>
        <div style={{ color: "var(--primary-0-hover)", marginLeft: "1.5rem" }}>
          Contattami anche su:
        </div>
        <div className="flex-row correct-mail-icon">
          <span>
            <IoIosMail className="icon" />
          </span>
          <a href="mailto:costanzadic@gmail.com">costanzadic@gmail.com</a>
        </div>
      </div>
    </article>
  )
}
