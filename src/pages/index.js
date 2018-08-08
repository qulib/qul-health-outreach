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
              <Card node = {node} />
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
  allWordpressPost(sort: {fields: [date]}, filter: {categories: {slug: {eq: "home"}}}) {
    edges {
      node {
        title
        slug
        content
        featured_media {
          alt_text
          localFile {
            childImageSharp {
              resize(
                width: 400
                toFormat: PNG
              ) {
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