import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

class Home extends Component {
  render() {
    const data = this.props.data;

    return (
      <Layout>
        <div className="cards">
          {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <Card 
                image={node.featured_media.localFile.childImageSharp.resize.src}
                image_alt={node.featured_media.alt_text}
                title={node.title} 
                content={node.content} 
                link={node.acf.link}
              />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
{
  allWordpressPost(sort: {fields: [date]}, filter: {categories: {slug: {eq: "cat-1"}}}) {
    edges {
      node {
        title
        slug
        content
        featured_media {
          alt_text
          localFile {
            childImageSharp {
              resize {
                src
              }
            }
          }
        }
        acf {
          link
        }
      }
    }
  }
}
`