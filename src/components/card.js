import React from "react"
// import Img from "gatsby-image"

const Card = ({ image, image_alt, title, content, link }) => (
  <article className="card">
    <a href={link}>
      <figure className="card-thumbnail">
        <img src={image} alt={image_alt}/>
      </figure>
      <main>
        <h3 className="card-title">{title}</h3>
        <div className="card-content" dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </a>
  </article>
)

export default Card