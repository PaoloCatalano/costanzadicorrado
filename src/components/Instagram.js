import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsHeart } from "react-icons/bs"
import { VscSmiley } from "react-icons/vsc"
import { FiSend, FiMessageCircle } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"

const Instagram = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode(
        limit: 3
        sort: { fields: timestamp, order: DESC }
        filter: {}
      ) {
        nodes {
          id
          caption
          likes
          comments
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                quality: 100
                layout: CONSTRAINED
                aspectRatio: 0.8
              )
            }
          }
        }
      }
    }
  `)
  return (
    <div className="instagram">
      {data.allInstaNode.nodes.map((post, index) => {
        const {
          likes,
          comments,
          caption,
          id,
          localFile: { childImageSharp },
        } = post

        return (
          <div className="card-insta" key={index}>
            <div className="title-insta">
              <FaInstagram />
              <div>
                <a
                  href="https://instagram.com/costanzadicorrado_mua"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="user-insta">
                    costanzadicorrado_mua • <span>&nbsp;Segui</span>
                  </div>
                </a>
                <div className="location-insta">Catania, Italia</div>
              </div>
            </div>
            <a
              href={`https://www.instagram.com/p/${id}/`}
              rel="noreferrer"
              target="_blank"
              className="post"
            >
              <GatsbyImage
                image={getImage(childImageSharp)}
                className="insta-img "
                alt={caption}
              />
              <div className="view-more-insta">
                <div>scopri di piú su instagram</div>
              </div>
              <div className="feedback">
                <BsHeart className="icona-insta" />
                <FiMessageCircle
                  style={{ transform: "rotateY(180deg)" }}
                  className="icona-insta"
                />
                <FiSend className="icona-insta" />
                <div style={{ marginLeft: "auto" }}>
                  <svg
                    aria-label="Save"
                    fill="#262626"
                    height="24"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                  </svg>
                </div>
              </div>
            </a>
            <div className="footer-insta likes">{likes} Likes</div>
            <div className="footer-insta caption">
              {caption.slice(0, 90)}...{" "}
              <span>
                <a
                  href={`https://www.instagram.com/p/${id}/`}
                  rel="noreferrer"
                  target="_blank"
                  key={index}
                  className="post"
                >
                  continua a leggere
                </a>
              </span>
            </div>
            <a
              href={`https://www.instagram.com/p/${id}/`}
              rel="noreferrer"
              target="_blank"
              key={index}
              className="post"
            >
              <div className="footer-insta comments">
                Vedi tutti i {comments} Commenti
              </div>
              <div className="add-comment">
                <VscSmiley className="smile" />
                <div>Aggiungi un commento...</div>
                <span>Post</span>
              </div>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Instagram
