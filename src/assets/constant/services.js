import React from "react"
import { ImMagicWand } from "react-icons/im"
import { GiBigDiamondRing, GiLipstick, GiPalette } from "react-icons/gi"
import { MdLinkedCamera } from "react-icons/md"
import { BiCameraMovie } from "react-icons/bi"
const services = [
  {
    id: 1,
    icon: <GiBigDiamondRing className="icone-servizi" />,
    title: "trucco sposa",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 2,
    icon: <GiLipstick className="icone-servizi" />,
    title: "cerimonia",
    text: `Diciottesimi, cresime, battesimi, compleanni`,
  },
  {
    id: 3,
    icon: <MdLinkedCamera className="icone-servizi" />,
    title: "beauty / fotografia",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 4,
    icon: <BiCameraMovie className="icone-servizi" />,
    title: "cinematografico",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 5,
    icon: <GiPalette className="icone-servizi" />,
    title: "TV / teatrale",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    id: 6,
    icon: <ImMagicWand className="icone-servizi" />,
    title: "creazione di contenuti",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
  },
]

const tempServices = services.map(service => {
  const { id, icon, title, text } = service
  return (
    <section
      key={id}
      className="service"
      itemScope
      itemProp="itemOffered"
      itemType="https://schema.org/Service"
    >
      <div className="icone">{icon}</div>
      <div
        itemProp="name"
        style={{
          fontWeight: 600,
          fontSize: "1.2rem",
          textTransform: "capitalize",
        }}
      >
        {title}
      </div>
      <p className="testo" itemProp="description">
        {text}
      </p>
    </section>
  )
})

export { services }

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  return tempServices
}
