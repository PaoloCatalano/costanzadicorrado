import React from "react"
import { useGlobalContext } from "../context/context"

const Form = () => {
  const { cookieAccepted } = useGlobalContext()
  React.useEffect(() => {
    console.log(cookieAccepted === "true" ? "Si" : "No")
  }, [cookieAccepted])
  return (
    <article className="contact-form">
      <form action="https://formspree.io/f/mpzkdgwo" method="POST">
        <div className="contattami">
          <input
            type="hidden"
            readOnly
            name="interesse per la newsletter + sconto?"
            value={cookieAccepted === "true" ? "Si" : "No"}
          />
          <input type="hidden" name="_language" value="it" />
          <input type="text" name="name" placeholder="Nome *" />
          <input type="email" name="email" placeholder="Email *" />
          <textarea
            name="message"
            rows="5"
            placeholder="Messaggio *"
          ></textarea>
        </div>
        <div className="form-button">
          <button
            type="submit"
            className="btn"
            style={{
              marginTop: "1rem",
            }}
          >
            Invia Richiesta
          </button>
        </div>
      </form>
    </article>
  )
}

export default Form
