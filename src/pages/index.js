import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div class="cards">
        {data.allWordpressPost.edges.map(({ node }) => (

            <Card 
              image={node.featured_media.source_url}
              image_alt={node.featured_media.alt_text}
              title={node.title} 
              content={node.content} 
              link={node.acf.link}
            />


          // do this way to link to the WP post page created by Gatsby
          // <div key={node.slug}>
          //   <Link to={node.slug} css={{ textDecoration: `none` }}>
          //     <h3>{node.title}</h3>
          //   </Link>
          //   <div dangerouslySetInnerHTML={{ __html: node.content }} />
          // </div>
          // 
          
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
  allWordpressPost(sort: {fields: [date]}) {
    edges {
      node {
        title
        slug
        content
        featured_media {
          source_url
          alt_text
        }
        acf {
          link
        }
      }
    }
  }
}
`