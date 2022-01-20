import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import CookieConsent, { Cookies } from "react-cookie-consent"
// import { useLocation } from "@reach/router" // this helps tracking the location
// import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import { useGlobalContext } from "../context/context"
const Popup = () => {
  //   const location = useLocation()
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
      expires={14}
      cookieName="promozione"
      flipButtons
      ariaAcceptLabel
      onAccept={() => {
        setCookieAccepted("true")
        // Cookies.set("gatsby-gdpr-google-tagmanager", true)
        // Cookies.set("gatsby-gdpr-google-analytics", true)
        // initializeAndTrack(location)
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
        {/* Costanza Dicorrado
        <div>make up artist</div> */}
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
          <p style={{ fontSize: 15 }}>
            Iscriviti subito per rimanere aggiornato
          </p>
          <strong>
            Riceverai il <u>10% di sconto</u> sul tuo primo servizio makeup!
          </strong>
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
  //   width: "90%",
  //   height: "3rem",
}
const declineButtonStyle = {
  //   padding: 5,
  //   margin: 0,
  //   textTransform: "lowercase",
  borderRadius: 4,
  backgroundColor: "#fff",
  color: "var(--red-dark)",
  border: "2px solid var(--red-dark)",
}
export default Popup
