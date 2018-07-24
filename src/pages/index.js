import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout siteTitle={data.site.siteMetadata.title} siteSubtitle={data.site.siteMetadata.subtitle}>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
{
  allWordpressPost(sort: {fields: [date]}) {
    edges {
      node {
        id
        title
        slug
        excerpt
        featured_media {
          source_url
          alt_text
        }
      }
    }
  }
  site {
    siteMetadata {
      title
      subtitle
    }
  }
}
`