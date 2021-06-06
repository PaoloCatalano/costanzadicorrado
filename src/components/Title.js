import React from "react"

const Title = ({ title = "title" }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3
        style={{
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "3rem 0",
        }}
      >
        {title}
        <div
          style={{
            width: "100%",
            maxWidth: 200,
            height: 2,
            background: "var(--primary-0)",
            margin: 16,
          }}
        ></div>
      </h3>
    </div>
  )
}

export default Title
