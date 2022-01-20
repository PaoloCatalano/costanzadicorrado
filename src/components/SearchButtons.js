import React from "react"

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
  const [index, setIndex] = React.useState(0)
  const types = [
    "Tutte le Categorie",
    ...new Set(
      projects.map(project => {
        return project.categoria
      })
    ),
  ]
  const showProjects = (type, typeIndex) => {
    setIndex(typeIndex)
    if (type === "Tutte le Categorie") {
      setBackToAll()
    } else {
      const tempProjects = projects.filter(
        project => project.categoria === type
      )
      setProjects(tempProjects)
    }
  }
  return (
    <section>
      {types.map((type, typeIndex) => {
        return (
          <button
            key={typeIndex}
            className={index === typeIndex ? "active" : undefined}
            onClick={() => showProjects(type, typeIndex)}
          >
            {type}
          </button>
        )
      })}
    </section>
  )
}

export default SearchButtons
