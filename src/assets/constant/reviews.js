import female from "../images/user-female.png"
// import male from "../images/user-male.png"
import React from "react"
import { MdFormatQuote } from "react-icons/md"
const data = [
  {
    id: 1,
    icon: female,
    name: "Amal Kouam",
    text: (
      <>
        <MdFormatQuote className="icon" />
        <i>
          Professionalità, nonché il talento subito visibili. Una dolcissima e
          bellissima persona, super disponibile e paziente! Ve la consiglio.
        </i>
        😍
        <MdFormatQuote className="icon" />
      </>
    ),
  },
  {
    id: 2,
    icon: female,
    name: "Marta Messina",
    text: (
      <>
        <MdFormatQuote className="icon" />
        <i>
          Grande professionista e molto versatile, in grado di realizzare
          diversi tipi di trucco dal più semplice al più particolare.
        </i>
        😍
        <MdFormatQuote className="icon" />
      </>
    ),
  },
  {
    id: 3,
    icon: female,
    name: "Martina Delacqua",
    text: (
      <>
        <MdFormatQuote className="icon" />
        <i>
          È stato molto facile affidarmi affidarmi sua professionalità e
          bravura. Ragazza dolcissima, con una grande conoscenza in fatto di
          makeup e su come esaltare i tratti del viso di ogni ragazza. Trucco
          finale stupendo e perfetto per il tema scelto.
        </i>{" "}
        ❤
        <MdFormatQuote className="icon" />
      </>
    ),
  },
  {
    id: 4,
    icon: female,
    name: "Maria Sardina",
    text: (
      <>
        <MdFormatQuote className="icon" />
        <i>
          Una ragazza molto simpatica ma soprattutto volenterosa, mette sempre
          al proprio agio. [...] Consiglio a tutte di provare le sue tecniche,
          rimarrete molto contente.
        </i>
        😊💄💋
        <MdFormatQuote className="icon" />
      </>
    ),
  },
]

export default data
