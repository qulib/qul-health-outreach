import React from "react"
// import Img from "gatsby-image"

const Card = ({ image, image_alt, title, content, link }) => (
  <article class="card">
    <a href={link}>
      <figure class="card-thumbnail">
        <img src={image} alt={image_alt}/>
      </figure>
      <main>
        <h3 class="card-title">{title}</h3>
        <div class="card-content" dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </a>
  </article>
)

export default Card