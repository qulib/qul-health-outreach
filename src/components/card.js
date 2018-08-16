import React from "react"
import { graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Card = ({ node }) => (
  <article className="card">
    <OutboundLink href={node.acf.link} title={node.title}>
      <figure className="card-thumbnail">

        <img
          src={
            // "/health-outreach" +
            node.featured_media.localFile.childImageSharp.resize.src
          }
          alt={node.featured_media.alt_text}
        />
      </figure>
      <main>
        <h3 className="card-title">{node.title}</h3>
        <div
          className="card-content"
          dangerouslySetInnerHTML={{ __html: node.content }}
        />
      </main>
    </OutboundLink>
  </article>
)

export default Card;

export const cardData = graphql`
  fragment CardData on wordpress__POST {
    title
    slug
    content
    acf {
      link
    }
    featured_media {
      alt_text
      localFile {
        childImageSharp {
          resize(width: 400) {
            src
          }
        }
      }
    }
  }
`