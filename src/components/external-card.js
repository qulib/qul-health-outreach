import React from "react"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ExternalCard = ({ node }) => (
  <article className="card">
    <OutboundLink href={node.acf.link} title={node.title}>
      <figure className="card-thumbnail">
        <img src={node.featured_media.localFile.childImageSharp.resize.src} alt={node.featured_media.alt_text}/>
      </figure>
      <main>
        <h3 className="card-title">{node.title}</h3>
        <div className="card-content" dangerouslySetInnerHTML={{ __html: node.content }} />
      </main>
    </OutboundLink>
  </article>
)

export default ExternalCard