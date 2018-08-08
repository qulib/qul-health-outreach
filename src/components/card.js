import React from "react"
// import Img from "gatsby-image"

const Card = ({ node }) => (
  <article className="card">
    <a href={node.acf.link} title={node.title}>
      <figure className="card-thumbnail">
        <img src={node.featured_media.localFile.childImageSharp.resize.src} alt={node.featured_media.alt_text}/>
      </figure>
      <main>
        <h3 className="card-title">{node.title}</h3>
        <div className="card-content" dangerouslySetInnerHTML={{ __html: node.content }} />
      </main>
    </a>
  </article>
)

// export const cardData = graphql`
// fragment CardData on Card { 
//   edges {
//     node {
//       title
//       slug
//       content
//       featured_media {
//         alt_text
//         localFile {
//           childImageSharp {
//             resize(
//               width: 400
//               toFormat: JPG
//             ) {
//               src
//             }

//           }
//         }
//       }
//       acf {
//         link
//       }
//     }
//   }
// }
// `

export default Card