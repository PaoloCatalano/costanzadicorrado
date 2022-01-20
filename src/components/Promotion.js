import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import CookieConsent, { Cookies } from "react-cookie-consent"
import { useGlobalContext } from "../context/context"
const Popup = () => {
  const { setCookieAccepted } = useGlobalContext()
  const [email, setEmail] = React.useState("")

  return (
    <CookieConsent
      overlay
      overlayClasses="overlayClasses"
      containerClasses="containerClasses"
      buttonWrapperClasses="buttonWrapperClasses"
      buttonClasses="buttonClasses"
      declineButtonClasses="declineButtonClasses"
      style={comStyle}
      contentStyle={{ margin: 0 }}
      buttonStyle={acceptButtonStyle}
      expires={3}
      cookieName="promozione"
      flipButtons
      ariaAcceptLabel
      onAccept={() => {
        setCookieAccepted("true")
      }}
      location="bottom"
      buttonText="Giá Iscritto"
      sameSite="none"
      cookieSecurity
      enableDeclineButton
      declineButtonText="Piú Tardi"
      ariaDeclineLabel
      declineButtonStyle={declineButtonStyle}
      onDecline={() => {
        setCookieAccepted("false")
      }}
    >
      <div className="logo-cookie">
        <StaticImage
          src="../assets/images/cdb.png"
          alt="Costanza Dicorrado Logo"
          placeholder="tracedSVG"
          layout="fixed"
          height={80}
          className="img logo"
          quality="100"
        />
      </div>
      <div className="notice">
        <div
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          <strong style={{ fontSize: 15 }}>
            Iscriviti subito per rimanere aggiornato
          </strong>
          <p>
            Riceverai il{" "}
            <strong>
              <u>10% di sconto</u>
            </strong>{" "}
            sul tuo primo servizio makeup!
          </p>
        </div>
        <form
          action="https://formspree.io/f/mgerkjvn"
          method="POST"
          className="promotion-form"
        >
          <input
            type="hidden"
            readOnly
            name="newsletter"
            value="interesse per la newsletter + sconto: Si"
          />
          <input type="hidden" name="_language" value="it" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <button
            style={{ marginTop: "1rem" }}
            type="submit"
            className="btn"
            onClick={() => {
              if (
                email.match(
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                )
              ) {
                Cookies.set("promozione", true)
                setCookieAccepted("true")
              }
            }}
          >
            Iscriviti ora
          </button>
        </form>
      </div>
    </CookieConsent>
  )
}
const comStyle = {
  alignItems: "baseline",
  background: "#fff",
  color: "white",
  zIndex: 999,
  position: "static",
  width: "60vw",
  display: "grid",
  grid: "auto auto / 1fr",
  border: "2px solid var(--primary-0)",
}
const acceptButtonStyle = {
  borderRadius: 4,
  margin: 15,
  backgroundColor: "#fff",
  color: "var(--green-dark)",
  fontSize: "14px",
  fontWeight: "bold",
  border: "2px solid var(--green-dark)",
}
const declineButtonStyle = {
  borderRadius: 4,
  backgroundColor: "#fff",
  color: "var(--red-dark)",
  border: "2px solid var(--red-dark)",
}
export default Popup
