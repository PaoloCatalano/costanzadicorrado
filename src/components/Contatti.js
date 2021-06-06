import React from "react"
import Form from "./Form"
import { IoIosMail } from "react-icons/io"
import { ImLocation } from "react-icons/im"
import Title from "./Title"

const Contatti = () => {
  return (
    <div className="container" id="contatti">
      <Title title="contattami" />
      <section className="container-center">
        <Form />
        <article className="contacts">
          <div className="flex-col media-flex-col">
            <div className="flex-row correction-translateX">
              <span>
                <ImLocation className="icon" />
              </span>
              Catania, Sicilia
            </div>
            <div className="flex-row correctot-mail-icon">
              <span>
                <IoIosMail className="icon" />
              </span>
              <a href="mailto:costanzadic@gmail.com">costanzadic@gmail.com</a>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Contatti
