import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SearchButtons from "./SearchButtons"

const Projects = ({ projects: data = [] }) => {
  const [projects, setProjects] = React.useState(data)

  const setBackToAll = () => {
    setProjects(data)
  }

  return (
    <section className="search-buttons">
      <SearchButtons
        projects={data}
        setProjects={setProjects}
        setBackToAll={setBackToAll}
      />

      <div className="all-lavori">
        {projects.map(item => {
          const { ordine, titolo, categoria, foto } = item

          return (
            <article key={ordine}>
              <div className="categoria-info link-style">{categoria}</div>
              <div className="foto-lavoro">
                <GatsbyImage
                  image={getImage(foto.gatsbyImageData)}
                  alt={`Costanza Dicorrado ha truccato ${titolo}, categoria trucco: ${categoria}`}
                  className="img"
                />
                <div className="info">{titolo}</div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
