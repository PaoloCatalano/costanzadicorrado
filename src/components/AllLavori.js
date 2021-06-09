import React from "react"
// import Title from "./Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SearchButtons from "./SearchButtons"
// import { fotoLavori } from "../assets/data/fotoLavori"
const Projects = ({ projects: data = [] }) => {
  // const [projects, setProjects] = React.useState(fotoLavori)
  const [projects, setProjects] = React.useState(data)

  const setBackToAll = () => {
    // setProjects(fotoLavori)
    setProjects(data)
  }

  return (
    <section className="search-buttons">
      <SearchButtons
        projects={data}
        // projects={fotoLavori}
        setProjects={setProjects}
        setBackToAll={setBackToAll}
      />

      <div className="all-lavori">
        {projects.map(item => {
          const { ordine, titolo, categoria, foto } = item

          return (
            <article key={ordine}>
              <div className="categoria-info">{categoria}</div>
              <div style={{ position: "relative" }}>
                <GatsbyImage
                  image={getImage(foto.gatsbyImageData)}
                  alt={`Costanza Dicorrado ha truccato ${titolo}, categoria trucco: ${categoria}`}
                  className="img"
                />
                {/* <img src={foto} alt={titolo} style={{ maxWidth: 500 }} /> */}
                <div className="info">{titolo}</div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

// const Wrapper = styled.section`
//   background: var(--clr-grey-10);
//   .section-center {
//     margin-top: 4rem;
//     max-width: var(--max-width);
//     display: grid;
//     gap: 2rem;
//     /* safari workaround */
//     grid-gap: 2rem;
//     .img {
//       height: 100%;
//       border-radius: var(--radius);
//       transition: var(--transition);
//     }
//     article {
//       box-shadow: var(--light-shadow);
//       border-radius: var(--radius);
//       transition: var(--transition);
//     }
//     article:hover {
//       box-shadow: var(--dark-shadow);
//     }
//     .container {
//       height: 15rem;
//       position: relative;
//       overflow: hidden;
//       border-radius: var(--radius);
//       background: var(--clr-primary-7);
//       &:hover .img {
//         opacity: 0.2;
//       }
//       .info {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         width: 100%;
//         opacity: 0;
//         transition: var(--transition);
//         color: var(--clr-white);
//         text-align: center;
//         p {
//           margin-bottom: 0.5rem;
//           color: var(--clr-white);
//           text-transform: uppercase;
//         }
//       }
//       &:hover .info {
//         opacity: 1;
//       }
//     }
//     @media (min-width: 768px) {
//       .container {
//         height: 15rem;
//       }
//       grid-template-columns: 1fr 1fr;
//     }
//     @media (min-width: 992px) {
//       .container {
//         height: 12.5rem;
//       }
//       grid-template-columns: 1fr 1fr 1fr;
//     }
//     @media (min-width: 1200px) {
//       .container {
//         height: 15rem;
//       }
//     }
//   }
//   a {
//     display: block;
//     width: 9rem;
//     text-align: center;
//     margin: 0 auto;
//     margin-top: 3rem;
//   }
// `
export default Projects
