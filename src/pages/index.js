import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import { rhythm } from "../utils/typography"

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <div>
        <Header siteTitle={data.site.siteMetadata.title}/>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </div>
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
